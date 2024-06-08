import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mirror.admin.wesee.backendarchitects.com/app#!/login');
  await page.getByPlaceholder('Username or email').click();
  await page.getByPlaceholder('Username or email').fill('master@wesee.solutions');
  await page.getByPlaceholder('Username or email').press('Tab');
  await page.getByPlaceholder('Password').fill('test1234');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('#page-content-wrapper').getByRole('link').nth(2).click();
  await page.locator('ana-user-bar').getByRole('listitem').getByRole('link').click();
  await page.getByText('Profile General information Change avatar General information Personal details').click();
  await page.getByRole('link', { name: ' Logout' }).click();
});