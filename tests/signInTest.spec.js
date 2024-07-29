import { test, expect } from '@playwright/test';
import { HomePage } from '../PageObjects/HomePage';
import { SignInPage } from '../PageObjects/SignInPage';
import { WorkspacePage } from '../PageObjects/WorkspacePage';

test('can sign in', async ({ page }) => {

    const homePage = new HomePage(page);
    await homePage.navigate('http://dev.rev.com/');
    await homePage.clickLogin();
  
    await expect(page).toHaveTitle(/Login/);

    const signInPage = new SignInPage(page);
    signInPage.fillUsername('xxxx')
    signInPage.clickNext();
    signInPage.fillPassword('yyyy');
    signInPage.clickSignIn();

  });