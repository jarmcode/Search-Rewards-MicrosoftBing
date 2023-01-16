const { By } = require("selenium-webdriver");
const actions = require("../../core/ui/utils/actions");
const conditions = require("../../core/ui/utils/conditions");

class SearchsPage {

    bingLogo = By.css('a[class="b_logoArea"]');
    searchInput = By.css('input[class="b_searchbox"]');
    searchBtn = By.css('input[class="b_searchboxSubmit"]');

    async doSearch(times) {
        const numb = Number(times);
        await actions.sleep(2000);
        await conditions.untilVisible(this.bingLogo);
        
        for(let i = 0; i = numb; i++){
        const search = Math.random()
        await actions.setText(this.searchInput, search)
        await actions.clickOn(this.searchBtn);   
        }
        
    }
}

const searchsPage = new SearchsPage();

module.exports = searchsPage;