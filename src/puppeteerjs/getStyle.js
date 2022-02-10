const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://google.com');

    // Get the "viewport" of the page, as reported by the page.
    const body = await page.evaluate(() => {
        return {
            // body: document.getElementsByTagName('*')
            // body: document.innerHTML.match("background:(.*?);")
            // body: document.body.innerHTML.match("<style>(.*?)</style>")
        
        };
    });

    console.log('getStyle.js | style:', body);

    await browser.close();
})();