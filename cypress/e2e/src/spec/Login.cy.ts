
import {LoginPage} from "./Pages/Login_Page"

const loginPage = new LoginPage()
describe('login spec', () => {

    it('passes', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

      loginPage.enterUserName('Admin');//passing data from test script
      loginPage.enterPassword('admin123');
      loginPage.clickLoginButton();
      
    })
  })