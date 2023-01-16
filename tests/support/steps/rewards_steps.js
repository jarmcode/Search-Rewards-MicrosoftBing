const { When } = require("@cucumber/cucumber");
const rewardsPage = require("../../../main/rewards/rewards_page");
const searchsPage = require("../../../main/searching/search_page");

When('searches in microsoft {string} times', async function (times) {

    await rewardsPage.startSearch();
    await searchsPage.doSearch(times);
} );