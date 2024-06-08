import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mirror.admin.wesee.backendarchitects.com/app#!/super');
  await page.goto('https://mirror.admin.wesee.backendarchitects.com/app#!/login');
  await page.getByPlaceholder('Username or email').click();
  await page.getByPlaceholder('Username or email').fill('web');
  await page.getByPlaceholder('Username or email').click({
    clickCount: 3
  });
  await page.getByPlaceholder('Username or email').fill('master@wesee.csolutions');
  await page.getByPlaceholder('Username or email').press('Tab');
  await page.getByPlaceholder('Password').fill('test1234');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Ok' }).click();
  await page.getByPlaceholder('Username or email').click({
    clickCount: 3
  });
  await page.getByPlaceholder('Username or email').fill('master@wesee.solutions');
  await page.getByPlaceholder('Password').dblclick();
  await page.getByPlaceholder('Password').fill('test1234');
  await page.getByPlaceholder('Password').press('Enter');
  await page.getByRole('link', { name: ' Logout' }).click();
});