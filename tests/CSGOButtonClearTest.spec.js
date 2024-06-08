const { test, expect } = require('@playwright/test');

test('Test +1 and Clear buttons on CSGOEmpire roulette page', async ({ page }) => {
  // Go to the CSGOEmpire roulette page
  await page.goto('https://csgoempire.com/roulette');

  // Find the "+1" button
  const plusOneButton = await page.waitForSelector('button[data-v-a3a19079].bet-input__control:has-text("+ 1")', { state: 'visible', timeout: 10000 });

  // Verify that the "+1" button is clickable
  expect(plusOneButton).not.toBeNull();

  // Click the "+1" button
  await plusOneButton.click();

  // Verify that the value in the input box is set to "1"
  let inputValue = await page.$eval('input[placeholder="Enter bet amount..."]', el => el.value);
  expect(inputValue).toBe('1');

  // Find the "Clear" button
  const clearButton = await page.waitForSelector('button[data-v-a3a19079].bet-input__control:has-text("Clear")', { state: 'visible', timeout: 10000 });

  // Verify that the "Clear" button is clickable
  expect(clearButton).not.toBeNull();

  // Click the "Clear" button
  await clearButton.click();

  // Verify that the value in the input box is set to "0"
  inputValue = await page.$eval('input[placeholder="Enter bet amount..."]', el => el.value);
  expect(inputValue).toBe('0');
});