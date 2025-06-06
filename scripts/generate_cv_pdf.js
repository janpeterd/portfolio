import puppeteer from 'puppeteer'
import fs from 'node:fs'
import { createConnection } from 'node:net'
import { hostname } from 'node:os'

/** @typedef {Object} Margin
 * @property {string} top
 * @property {string} bottom
 * @property {string} left
 * @property {string} right
 */

/** @typedef {Object} PdfConfig
 * @property {string} path
 * @property {string} format
 * @property {boolean} printBackground - printBackground
 * @property {Margin} margin - margin
 */

/** @typedef {Object} GeneratePdfConfig
 * @property {string} hostname - hostname
 * @property {number} port - port
 * @property {string} route - route
 * @property {string} colorscheme - colorscheme
 * @property {string} dest - destination folder
 * @property {string} fileName - fileName pdf
 * @property {PdfConfig} pdfConfig - pdfConfig
 * */

/** @type {GeneratePdfConfig} */ const generationConfig = {
  hostname: 'localhost',
  port: 5173,
  route: '/cv',
  colorscheme: 'light',
  dest: './static/doc',
  fileName: 'cv_Jan-Peter_Dhallé',
  pdfConfig: {
    path: `./static/doc/cv_Jan-Peter_Dhallé.pdf`,
    format: 'a4',
    printBackground: true,
    margin: {
      top: '0',
      bottom: '0',
      left: '0',
      right: '0'
    }
  }
}

/** @param {GeneratePdfConfig} config*/
const generatePdfAsync = async (config) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: config.colorscheme }])
  await page.goto(`http://${config.hostname}:${config.port}${config.route}`, {
    waitUntil: 'domcontentloaded'
  })

  await new Promise((resolve) => setTimeout(resolve, 2000))

  config.pdfConfig.path = `${config.dest}/${config.fileName}_${config.colorscheme}.pdf`
  await page.pdf(config.pdfConfig)

  await browser.close()
}

const printPdfFileStats = (config, lightAndDark) => {
  const path = lightAndDark
    ? `${config.dest}/${config.fileName}_${config.colorscheme}.pdf`
    : config.pdfConfig.path

  try {
    const stats = fs.statSync(path)
    console.log(
      '\x1b[42m SUCCESS: \x1b[0m',
      `Generated PDF file:\n\tpath:${path}\n\tsize: ${(stats.size / 1024000).toFixed(2)}MB\n\tcreated: ${stats.ctime}`
    )
  } catch (err) {
    console.error('\x1b[41m ERROR: \x1b[0m', 'Cannot access PDF file for stats.')
    console.error(err)
  }
}

const checkRunning = (config) => {
  return new Promise((resolve) => {
    const start = performance.now()
    const socket = createConnection(config.port, config.hostname)
    socket.setTimeout(3000)
    socket.on('connect', () => {
      const end = performance.now()
      socket.end()
      resolve(end - start)
    })
    function handleError() {
      socket.destroy()
      resolve(-1)
    }
    socket.on('timeout', handleError)
    socket.on('error', handleError)
  })
}

if ((await checkRunning(generationConfig)) != -1) {
  await generatePdfAsync(generationConfig)
  printPdfFileStats(generationConfig, true)
  generationConfig.colorscheme = 'dark'
  await generatePdfAsync(generationConfig)
  printPdfFileStats(generationConfig, true)
} else {
  console.error(
    '\x1b[41m ERROR: \x1b[0m',
    'Cannot connect to server.\nAre you running the dev server? (start with pnpm run dev)'
  )
}
