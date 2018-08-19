import jSonArr from '../data/login_data.json'
import LoginPage from '../pageobjects/loginpageobject';
import { logger } from '../../log.conf'


/*
	This is a BDD test using Jasmine JavaScript framework
*/

describe('phptravels.net login page', () => {
//   it('should allow user to login ', function () {
//     LoginPage.open();     // navigating to login page
//     LoginPage.login('user@phptravels.com', 'demouser');    // entering user name, password and and submiting the page
//   });

let data = JSON.parse(JSON.stringify(jSonArr.Data));

  it('should log in unsuccessfully with invalid password', () => {
    LoginPage.open();     // navigating to login page
    LoginPage.loginPage(data[0].email, data[0].pwd);    // entering user name, password and and submiting the page
    logger.info(`${data[0].email} and ${data[0].pwd}`);
    // LoginPage.waitForloginPageToLoad();
    // LoginPage.email.setValue(data[0].email);
    // LoginPage.password.setValue(data[0].pwd);
    // LoginPage.login.click();
    // browser.pause(2000);

});

});
