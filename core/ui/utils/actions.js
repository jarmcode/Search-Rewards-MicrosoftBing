/**
 * Webdriver Actions
 */
const logger = require('../../utils/logger_manager');
const DriverManager = require('../driver_manager');
const { setUp } = require('../../utils/configuration_manager');
const conditions = require('./conditions');
const {Key} = require('selenium-webdriver');

class Actions {
    static get driver() {
        return DriverManager.driver;
    }

    static async getWebElement(locator, timeout = setUp.explicitTimeout) {
        logger.debug(`Getting element by "${locator}"`);
        //await conditions.untilLocated(locator, timeout);
        //await conditions.untilVisible(locator, timeout);
        return await Actions.driver.findElement(locator);
    }

    static async clickOn(locator, timeout = setUp.explicitTimeout) {
        logger.debug(`Click on "${locator}"`);
        const element = await Actions.getWebElement(locator, timeout);
        return element.click()
    }

    static async setText(locator, value){
        logger.debug(`Type "${value}" on "${locator}"`);
        const element = await Actions.getWebElement(locator);
        await element.clear();
        await element.sendKeys(value);
    }

    static async setTextAndEnter(locator, value){
        logger.debug(`Type "${value}" on "${locator}"`);
        const element = await Actions.getWebElement(locator);
        await element.clear();
        await element.sendKeys(value + Key.ENTER);
    }

    static async pressKeys(locator, ...key) {
        logger.debug(`Pressing "${key}" key/s on: "${locator}"`);
        const element = await Actions.getWebElement(locator);
        await element.sendKeys(...key);
    }

    static async sleep(time) {
        await Actions.driver.sleep(time);
    }

    static async originalWindowID () {
        return await Actions.driver.getWindowHandle();
    }

    //Loop through until we find a new window handle
    static async switchToNewTab(originalWindow) {
        const windows = await Actions.driver.getAllWindowHandles();
        windows.forEach(async handle => {
        if (handle !== originalWindow) {
            await Actions.driver.switchTo().window(handle);
        }
        });
    }

}

module.exports = Actions;