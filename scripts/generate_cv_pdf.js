import puppeteer from 'puppeteer'
import fs from 'node:fs'

const pdfPath = './static/doc/cv_Jan-Peter_Dhallé.pdf'
// const domain = "https://portfolio-one-alpha-86.vercel.app";
const domain = 'http://localhost:5173'
const cv_route = '/cv'
const browser = await puppeteer.launch()
const page = await browser.newPage()
await page.goto(domain + cv_route, {
  waitUntil: 'networkidle2'
})

await page.pdf({
  path: pdfPath,
  format: 'a4',
  margin: {
    top: '0.5in',
    bottom: '0.5in',
    left: '0.5in',
    right: '0.5in'
  }
})

await browser.close()

try {
  const stats = fs.statSync(pdfPath)
  console.log(
    `Generated PDF file:\n\tsize: ${(stats.size / 1024000).toFixed(2)}MB\n\tcreated: ${stats.ctime}`
  )
} catch (err) {
  console.error('Cannot access PDF file')
  console.error(err)
}
