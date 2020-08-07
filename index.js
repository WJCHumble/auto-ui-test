const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch({
    headless: false, //有浏览器界面启动
    slowMo: 100, //放慢浏览器执行速度，方便测试观察
    args: ["–no-sandbox", "--window-size=1280,960"],
  });
  const page = await browser.newPage();
  await page.goto("https://juejin.im");
  const login = await page.$(".login-button");
  await login.click();

  const othersWayLogin = await page.$(".prompt-box .clickable");
  await othersWayLogin.click();

  const loginPhoneOrEmail = await page.$("[name=loginPhoneOrEmail]");
  await loginPhoneOrEmail.click();
  await loginPhoneOrEmail.type("1957503379@qq.com", { delay: 20 });

  const password = await page.$("[placeholder=请输入密码]");
  await password.click();
  await password.type("", { delay: 20 });

  const authLogin = await page.$(".panel .btn");
  await authLogin.click();
  //   await page.close();
  //   await browser.close();
})();
