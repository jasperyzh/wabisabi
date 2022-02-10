const isElementVisible = async (page, cssSelector) => {
    let visible = true;
    await page
        .waitForSelector(cssSelector, { visible: true, timeout: 2000 })
        .catch(() => {
            visible = false;
        });
    return visible;
};

const scraperObject = {
    url: 'https://nav.al/',
    async scraper(browser) {
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url);

        // Wait for the required DOM to be rendered
        // await page.waitForSelector('.page_inner');
        await page.waitForSelector('section.section-blog-listing');

        // load all
        let selectorForLoadMoreButton = "a.trigger-load-more";
        let loadMoreVisible = await isElementVisible(page, selectorForLoadMoreButton);

        while (loadMoreVisible) {
            await page
                .click(selectorForLoadMoreButton)
                .catch(() => { });
            loadMoreVisible = await isElementVisible(page, selectorForLoadMoreButton);
        }

        let urls = await page.$$eval('article.blog-item', links => {
            /* links = links.filter(link => link.querySelector('.blog-title'))
            links = links.map(el => {
                let title = el.querySelector('h2.blog-title > a').innerHTML
            }) */
            links.filter(link => link.querySelector('.blog-item-inner'))
            links = links.map(el => {
                return {
                    title: el.querySelector('h2.blog-title > a').innerHTML,
                    link: el.querySelector('h2.blog-title > a').href,
                    subtitle: (el.querySelector('.blog-subtitle')) ? el.querySelector('.blog-subtitle').innerHTML : "",
                    content: el.querySelector('.content').innerHTML,
                    date: el.querySelector('.date').innerHTML,
                }
            })
            return links
        });
        return urls;
    }
}

module.exports = scraperObject;
