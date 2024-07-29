
const { expect } = require('@playwright/test');
const {BasePage} = require('./BasePage');

/**
 * Represents the home page of the application.
 */
export class HomePage extends BasePage {
  /**
   * Constructs a new instance of the HomePage class.
   * @param {Page} page - The Playwright page object.
   */
  constructor(page) {
    super(page);
    this.loginAnchor = page.getByRole('link', { name: 'Login' });
  }

  async clickLogin() {
    await this.loginAnchor.click();
    await expect(this.loginAnchor).not.toBeVisible();
  }

}
