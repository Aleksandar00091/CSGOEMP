const { test } = require('@playwright/test');

test('Test MAX button on CSGOEmpire roulette page', async ({ page }) => {
  // Go to the CSGOEmpire roulette page
  await page.goto('https://csgoempire.com/roulette');

  // Find the MAX button
  const maxButton = await page.waitForSelector('button[data-v-a3a19079].bet-input__control:has-text("Max")', { state: 'visible', timeout: 10000 });

  // Verify that the MAX button is clickable
  expect(maxButton).not.toBeNull();

  // Click the MAX button
  await maxButton.click();

  // Optionally, you can perform further checks here if needed
});

( It is working it just actually has no value to input box so can not be tested until logged and and coins are in )

