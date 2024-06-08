const { test, expect } = require('@playwright/test');

test('Navigate to CSGOEmpire roulette page', async ({ page }) => {
  // Go to the CSGOEmpire main page
  await page.goto('https://csgoempire.com');

  // Wait for the "Games" button to be visible
  const gamesButton = await page.waitForSelector('button:has-text("Games")', { state: 'visible', timeout: 10000 });

  // Hover over the "Games" button to open the dropdown
  await gamesButton.hover();

  // Wait for the "Roulette" link to be visible in the dropdown
  await page.waitForSelector('a[href="/roulette"]', { state: 'visible', timeout: 10000 });

  // Click on the "Roulette" link
  await page.click('a[href="/roulette"]');

  // Verify that the roulette page loads by checking the title
  const pageTitle = await page.title();
  console.log('Roulette page title:', pageTitle);
  expect(pageTitle).not.toBe('');
});



