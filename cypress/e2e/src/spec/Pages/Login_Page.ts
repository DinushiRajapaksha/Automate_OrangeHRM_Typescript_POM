export class LoginPage{ //page class

    username_textbox = '[name="username"]';
    password_textbox = '[name="password"]';
    login_button = 'button';


    enterUserName(username){//methods
        cy.get(this.username_textbox).type(username);//object locator
    }
    enterPassword(password){
        cy.get(this.password_textbox).type(password);//this.password_textbox=class variable
    }
    clickLoginButton(){
        cy.get(this.login_button).contains('Login').click();
    }
}