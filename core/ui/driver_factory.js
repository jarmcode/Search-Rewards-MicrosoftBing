const ConfigurationManager = require("../utils/configuration_manager");
const { logger } = require("../utils/logger_manager");
const chrome = require("./drivers/chrome");

class DriverFactory {
    browser = ConfigurationManager.setUp.browser;
    capabilities = ConfigurationManager.setUp.capabilities;

    /**
     * It chooses beetwen different WebDriver options
     * @returns WebDriver
     */
    async createDriver() {
        switch (this.browser) {
        case "chrome":
            return await chrome(this.capabilities);
        default:
            logger.error("browser not found");
            break;
        }
    }
}

module.exports = new DriverFactory();
