const {By, Key} = require('selenium-webdriver');
const actions = require('../../core/ui/utils/actions');
const conditions = require('../../core/ui/utils/conditions');

class LoginPage {
    signInBtn = By.id('raf-signin-link-id');
    emailInput = By.css('input[name="loginfmt"]');
    nextBtn = By.id('idSIButton9');
    nextBtn2 = By.css('div[class="inline-block button-item ext-button-item"]');
    passwordInput = By.css('input[name="passwd"]');
    //passwordInput = By.css('div[class="placeholderContainer"]');
    staySignedTitle = By.css('div[class="row text-title"]');
    notStaySignedBtn = By.id('idBtn_Back');


    async login(user) {
        await actions.clickOn(this.signInBtn);
        await actions.setText(this.emailInput, user.username);
        await actions.pressKeys(this.emailInput, Key.ENTER);
        //await actions.clickOn(this.nextBtn);
        
        await actions.setText(this.passwordInput, user.password);
        
        //await actions.setTextAndEnter(this.passwordInput, user.password);

        await conditions.untilLocated(this.nextBtn2);
        await actions.sleep(2000);
        await actions.pressKeys(this.passwordInput, Key.ENTER);

        //await actions.clickOn(this.nextBtn2);
        
        await conditions.untilLocated(this.staySignedTitle);
        await conditions.untilTextIs(this.staySignedTitle, "Stay signed in?");
        await actions.clickOn(this.notStaySignedBtn);

        await conditions.untilTitleIs("Microsoft Rewards");
    }
}



const loginPage = new LoginPage();
module.exports = loginPage;