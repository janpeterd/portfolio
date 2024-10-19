import puppeteer from "puppeteer";

// const domain = "https://portfolio-one-alpha-86.vercel.app";
const domain = "http://localhost:5173";
const cv_route = "/cv";
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto(domain + cv_route, {
  waitUntil: "networkidle2",
});

await page.pdf({
  path: "./static/doc/cv_Jan-Peter_Dhallé.pdf",
  format: "a4",
  margin: {
    top: "0.5in",
    bottom: "0.5in",
    left: "0.5in",
    right: "0.5in",
  },
});

await browser.close();
