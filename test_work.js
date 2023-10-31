const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1800, height: 900 });

  await page.goto('https://www.google.com');
  await page.type('textarea[type=search]', 'qa engineering');
  await page.keyboard.press('Enter');
  
  await page.waitForSelector('#search');
  await page.screenshot({ path: 'screenshot.png' });

  await browser.close();
})();