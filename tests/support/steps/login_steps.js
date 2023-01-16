const { When, Then } = require("@cucumber/cucumber");
const loginPage = require("../../../main/login/login_page");
const { environment } = require('../../../core/utils/configuration_manager');


When('{string} logs in Chrome', {timeout: 60 * 1000}, async function (username) {
    console.log('inside the when');
    const user = environment[username];
    await loginPage.login(user);
});