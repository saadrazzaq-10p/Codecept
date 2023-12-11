Feature('Login User');

//Before(({ I }) => { 
  //  I.amOnPage('/');
  //});

  Scenario('logIn user with wrong credentials', ({ I, loginPage }) => {
    loginPage.openLoginPage();
    I.see('Log In'); //Assert to see Login Button
    loginPage.loginUser("test123", "test321");
    I.see('Your login attempt was not successful. Please try again.');
  }),

  Scenario('logIn user and LogOut', ({ I, loginPage }) => {
    loginPage.openLoginPage();
    I.see('Log In'); //Assert to see Login Button
    loginPage.loginUser("librarian", "librarian");
    I.wait(2); //Added wait just for practice
    I.see('Welcome to the Library Information System');
    I.dontSee('Log In');
    loginPage.logOutUser();
  }),

  Scenario('logIn user and add ', ({ I, loginPage }) => {
    loginPage.openLoginPage();
    I.see('Log In'); //Assert to see Login Button
    loginPage.loginUser("test123", "test321");
    I.see('Your login attempt was not successful. Please try again.');
  })

  Scenario('Test Dropdown and Checkboxes', ({ I, loginPage }) => {
    loginPage.openPracticeSite('Product Name: A to Z');
  });





