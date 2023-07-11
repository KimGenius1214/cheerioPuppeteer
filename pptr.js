// Import puppeteer
// import puppeteer from "puppeteer";
const puppeteer = require("puppeteer");
(async () => {
  // Launch the browser
  const browser = await puppeteer.launch();

  // Create a page
  const page = await browser.newPage();

  // Go to your site
  await page.goto("https://example.com");
  await page.screenshot({ path: "example.png" });

  //   // Query for an element handle.
  //   const element = await page.waitForSelector("div > .class-name");

  //   // Do something with element...
  //   await element.click(); // Just an example.

  //   // Dispose of handle
  //   await element.dispose();

  // Close browser.
  await browser.close();
})();

// 즉시 실행 함수 IIFE
