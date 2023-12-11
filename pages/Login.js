'use strict';

const { I } = inject();

module.exports = 
{
    fields:
    {
    username: 'Username:',
    password: 'Password:',
    loginButton: '#MainContent_LoginUser_LoginButton',
    logOutButton: 'Log Out',
    checkbox: '#layered_id_feature_13',
    dropdownOption: '#selectProductSort',
    },

    openLoginPage () 
    {
        I.amOnPage('/');
        I.amOnPage('/Account/Login.aspx');
        
    },

    loginUser (User, pwd) 
    {
        I.fillField(this.fields.username, User);
        I.fillField(this.fields.password, secret(pwd));
        I.click(this.fields.loginButton);
    },

    logOutUser () 
    {
        I.click(this.fields.logOutButton);
    },

    openPracticeSite (option) 
    {   
        I.amOnPage('http://automationpractice.com/index.php?id_category=9&controller=category');
        I.selectOption(this.fields.dropdownOption, option);
        I.checkOption(this.fields.checkbox);
    },
};
