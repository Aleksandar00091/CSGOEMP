const { test, expect } = require('@playwright/test');

test('Open Race Rules on CSGOEmpire roulette page and close new window', async ({ page }) => {
  // Go to the CSGOEmpire roulette page
  await page.goto('https://csgoempire.com/roulette');

  // Wait for the "Race Rules" icon to be visible
  await page.waitForSelector('div.icon-container');

  // Click on the "Race Rules" icon
  await page.click('div.icon-container');

  // Wait for the close button to be visible in the new window
  const closeButton = await page.waitForSelector('button[data-v-078e16c5][data-v-6a36e60b]');

  // Click on the close button to close the new window
  await closeButton.click();

  // You can add more verification steps here if needed
});












