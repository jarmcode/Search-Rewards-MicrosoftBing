/**
 * Chrome Driver
 */
require('chromedriver');
const { Browser, Builder } = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/chrome');

/**
 * Configures Chrome Driver
 * @param {*} capabilities Browser Capabilities
 */

async function chrome(capabilities) {
    //Options
    const options = new Options();
    if (capabilities.headless) options.headless();
    if (capabilities.maximizeWindow) options.addArguments("--start-maximized");
    else options.windowSize(capabilities.windowSize);
    options.excludeSwitches(["enable-automation", "disable-popup-blocking", "load-extension"]);
    options.setUserPreferences({
        "credentials_enable_service": false,
        "profile.password_manager_enabled": false,
        "profile.default_content_setting_values.notifications" : 2
    });

    //Driver
    return await new Builder().setChromeOptions(options).forBrowser(Browser.CHROME).build();
}

module.exports = chrome;
