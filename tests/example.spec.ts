import { test, expect } from '@playwright/test';

test('can sign in', async ({ page }) => {

  await page.goto('http://dev.rev.com/');

  page.getByRole('link', { name: 'Login' }).click();
  await expect(page).toHaveTitle(/Login/);

  const account = { username: 'xxxx', password: 'yyyy' };
  page.getByLabel('Email address').fill(account.username);
  
  page.getByRole('button', { name: 'Next' }).click();
  
  await expect(page.getByLabel('Password')).toBeVisible();
  page.getByLabel('Password').fill(account.password);
  page.getByRole('button', { name: 'Sign in', exact: true }).click();

  await expect(page).toHaveTitle(/.*My Files/);
});

