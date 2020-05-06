const puppeteer = require('puppeteer');
(async () => {
  //{ headless: false } permite abrir el navegador como interfaz gráfica
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
  await page.goto('https://es.wikipedia.org/wiki/Node.js');

  var titulo1 = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    return h1.innerHTML;
  });

  console.log(titulo1);
  browser.close();
})();