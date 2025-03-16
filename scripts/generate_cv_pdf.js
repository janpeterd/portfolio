import puppeteer from 'puppeteer'
import fs from 'node:fs'
import { createConnection } from 'node:net'

const hostname = 'localhost'
const port = 5173
const pdfPath = './static/doc/cv_Jan-Peter_Dhallé.pdf'
const cv_route = '/cv'
const generatePdfAsync = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(`http://${hostname}:${port}${cv_route}`, {
    waitUntil: 'networkidle2'
  })

  await page.pdf({
    path: pdfPath,
    format: 'a4',
    margin: {
      top: '0.5in',
      bottom: '0.5in',
      left: '0.3in',
      right: '0.3in'
    }
  })

  await browser.close()
}

const printPdfFileStats = () => {
  try {
    const stats = fs.statSync(pdfPath)
    console.log(
      '\x1b[42m SUCCESS: \x1b[0m',
      `Generated PDF file:\n\tpath:${pdfPath}\n\tsize: ${(stats.size / 1024000).toFixed(2)}MB\n\tcreated: ${stats.ctime}`
    )
  } catch (err) {
    console.error('\x1b[41m ERROR: \x1b[0m', 'Cannot access PDF file for stats.')
    console.error(err)
  }
}

const checkRunning = () => {
  return new Promise((resolve) => {
    const start = performance.now()
    const socket = createConnection(port, hostname)
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

if ((await checkRunning()) != -1) {
  await generatePdfAsync()
  printPdfFileStats()
} else {
  console.error(
    '\x1b[41m ERROR: \x1b[0m',
    'Cannot connect to server.\nAre you running the dev server? (start with pnpm run dev)'
  )
}
