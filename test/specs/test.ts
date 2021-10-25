describe("TEST", () => {
    it('should take screenshot in every ', async () => {
        await browser.url("https://google.com");
        await browser.url("https://odessa.ithillel.ua/coaches/olga-chekmaeva");
        await browser.url("http://beta.webdriver.io/docs/allure-reporter.html");
        await browser.url("https://odessa.ithillel.ua/coaches/olga-chekmaeva");
    });
})