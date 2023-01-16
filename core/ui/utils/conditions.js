/**
 * Webdriver Conditions
 */
const { until } = require('selenium-webdriver');
const DriverManager = require('../driver_manager');
const { setUp } = require('../../utils/configuration_manager');
const logger = require('../../utils/logger_manager');

class Conditions {
    static get driver() {
        return DriverManager.driver;
    }

    static async untilLocated(locator, timeout = setUp.explicitTimeout) {
        logger.debug(`Waiting until element is located "${locator}"`);
        return await DriverManager.driver.wait(until.elementLocated(locator), timeout)
    }

    static async untilVisible(locator, timeout = setUp.explicitTimeout) {
        logger.debug(`Waiting until element is visible "${locator}"`);
        const element = await DriverManager.driver.findElement(locator);
        return await DriverManager.driver.wait(until.elementIsVisible(element), timeout)
    }

    static async untilTitleIs(title, timeout = setUp.explicitTimeout){
        logger.debug(`Waiting until the page title is: "${title}"`);
        await DriverManager.driver.wait(until.titleIs(title),timeout);
    }

    static async untilTextIs(locator, text, timeout = setUp.explicitTimeout) {
        logger.debug(`Waiting until "${locator}" text is: "${text}"`);
        const element = await DriverManager.driver.findElement(locator);
        await DriverManager.driver.wait(until.elementTextIs(element, text), timeout)
    }

    static async untilNewTab (){
        //Wait for the new window or tab
        await DriverManager.driver.wait(
        async () => (await DriverManager.driver.getAllWindowHandles()).length === 2, 10000);
    }

}

module.exports = Conditions;