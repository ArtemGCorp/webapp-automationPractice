const { expect } = require('@playwright/test');

exports.RegisterPage = class RegisterPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.firstNameField = page.locator('input[type="text"]').first();
    this.lastNameField = page.locator('input[type="text"]').nth(1);
    this.usernameField = page.locator('input[type="text"]').nth(2);
    this.passwordField = page.locator('input[type="password"]').first();
    this.confirmPasswordField = page.locator('input[type="password"]').nth(1);
    this.signUpButton = page.locator('button:has-text("Sign Up")');
    this.signInLink = page.locator('a:has-text("Have an account? Sign In")');
  }

  async goto() {
    await this.page.goto('/signup');
  }

  async registerUser(firstName, lastName, username, password, confirmPassword) {
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.confirmPasswordField.fill(confirmPassword);
    await this.signUpButton.click();
  }
};
