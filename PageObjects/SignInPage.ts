const { expect } = require('@playwright/test');
const {BasePage} = require('./BasePage');

export class SignInPage extends BasePage {
    constructor(page) {
        super(page);
        this.usernameField = page.getByLabel('Email address');
        this.nextButton = page.getByRole('button', { name: 'Next' });
        this.passwordField = page.getByLabel('Password');
        this.signInButton = page.getByRole('button', { name: 'Sign in', exact: true });
    }

    async fillUsername(username: string) {
        await this.usernameField.fill(username);
    }

    async fillPassword(password: string) {
        await this.passwordField.fill(password);
    }

    async clickNext() {
        await this.nextButton.click();
        await expect(this.nextButton).not.toBeVisible();
    }

    async clickSignIn() {
        await this.signInButton.click();
        await this.signInButton.not.toBeVisible();
    }
}