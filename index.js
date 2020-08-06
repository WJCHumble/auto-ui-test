const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("https://juejin.im/user/2823201592973527/posts");
  await page.screenshot({ path: "./screenshot/profile.png" });
  browser.close();
})();
