import { test, expect } from '@playwright/test';

test('can record sign in', async ({ page }) => {
  await page.goto('https://dev.rev.com/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByLabel('Email address').click();
  await page.getByLabel('Email address').fill('xxxx');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('yyyy');
  await page.getByText('Rev.comSign inEmail').click();
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
});