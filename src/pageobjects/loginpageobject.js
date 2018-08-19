// login.page.js
"use strict";
import Page from './pageobject'

class LoginPage extends Page {


    get email()  { return browser.element('#email'); }
    get password()  { return browser.element('#pass'); }
    get login()      { return browser.element('#loginbutton'); }
    
    open() {
        super.open();
        browser.windowHandleMaximize();
    }

    waitForloginPageToLoad () {
        if(!this.footerImage.isVisible()){
          this.footerImage.waitForVisible(10000);
        }
      }
    
    loginPage (email, password) {
        // this.waitForloginPageToLoad();
        this.email.setValue(email);
        this.password.setValue(password);
        this.login.click();
        browser.pause(2000);
      }
    
}
module.exports = new LoginPage();