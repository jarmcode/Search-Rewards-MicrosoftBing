const { By } = require("selenium-webdriver");
const actions = require("../../core/ui/utils/actions");
const conditions = require("../../core/ui/utils/conditions");

class RewardsPage {

    pointBreakdownBtn = By.css('a[id="dailypointColumnCalltoAction"]>span');
    dailySearchTitle = By.css('div[class="center"] > div:nth-child(2) > h2');
    pcSearchBtn = By.css('a[class="ng-binding ng-scope c-hyperlink"]');

    async startSearch() {

        const originalWindow = await actions.originalWindowID();

        await actions.clickOn(this.pointBreakdownBtn);
        await conditions.untilTextIs(this.dailySearchTitle, "Daily search breakdown");
        await actions.clickOn(this.pcSearchBtn);

        await conditions.untilNewTab();
        await actions.switchToNewTab(originalWindow);

    }
}

const rewardsPage = new RewardsPage();

module.exports = rewardsPage;