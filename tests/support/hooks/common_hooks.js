const {Before, After} = require('@cucumber/cucumber')
const logger = require('../../../core/utils/logger_manager')
const DriverManager = require('../../../core/ui/driver_manager');
const {environment} = require('../../../core/utils/configuration_manager')

const {setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

/**
 * It starts a webdriver
 */
Before({tags: '@ui'}, async function () {
    console.log('*******************');
    logger.info('Opening driver from hook...');
    this.driver = await DriverManager.getDriver();
    logger.info(`Going to: "${environment.Url}"`)
    await this.driver.get(environment.Url);
});