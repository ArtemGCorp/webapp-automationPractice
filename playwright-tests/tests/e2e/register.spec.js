// @ts-check
const { test, expect } = require('@playwright/test');
const { RegisterPage } = require('../../pages/RegisterPage');
const { LoginPage } = require('../../pages/LoginPage');
const { MyAccountPage } = require('../../pages/MyAccountPage');

test('should register a new account', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  
  // Generate unique username using timestamp
  const timestamp = Date.now();
  const newUser = {
    firstName: 'Test',
    lastName: 'User',
    username: `testuser_${timestamp}`,
    password: 'Password123!',
    confirmPassword: 'Password123!'
  };

  // Register a new user
  await registerPage.goto();
  await registerPage.registerUser(
    newUser.firstName,
    newUser.lastName,
    newUser.username,
    newUser.password,
    newUser.confirmPassword
  );

  // Verify redirect to sign-in page
  await expect(page).toHaveURL('/signin');

  // Verify the new user can log in
  const loginPage = new LoginPage(page);
  await loginPage.userLogin(newUser.username, newUser.password);
  
  // Verify user is logged in by checking the account page
  const myAccountPage = new MyAccountPage(page);
  await expect(myAccountPage.userName).toHaveText(`@${newUser.username}`);
});
