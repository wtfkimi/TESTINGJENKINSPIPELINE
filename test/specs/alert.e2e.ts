const LOCATORS = require("../locators/locators.js")

describe('Suite ALERT TRAINING', () => {
    beforeEach('Login to application', async ()=> {
        await browser.url("https://the-internet.herokuapp.com/javascript_alerts");
    })
    it('Should be JS Alert',  async () => {
        const buttonAlert = await $(LOCATORS.SW.alert.locator);
        await buttonAlert.click();
        const alertText = await browser.getAlertText();
        expect(alertText).toEqual("I am a JS Alert");
    });
    it('Should be JS Confirm', async () => {
        const buttonAlert = await $(LOCATORS.SW.alertConfirm.locator);
        await buttonAlert.click();
        const alertText = await browser.getAlertText();
        await browser.acceptAlert();
        expect(alertText).toEqual("I am a JS Confirm");
    });
    it('Should be JS INPUT field', async () => {
        const buttonAlert = await $(LOCATORS.SW.alertPrompt.locator);
        await buttonAlert.click();
        const alertText = await browser.getAlertText();
        expect(alertText).toEqual("I am a JS prompt");
        await browser.sendAlertText("I am a JS prompt");
        await browser.acceptAlert();
        let result = await $(LOCATORS.SW.result.locator);
        const script = function () {
            const el = document.querySelector("p#result");
            el.style.color = "red"
        }
        await browser.execute(script);
        const text = await result.getText();
        const color = await result.getCSSProperty("color");
        expect(color.parsed.hex).toEqual(`#ff0000`);
        expect(text).toEqual("You entered: I am a JS prompt");

    });
})