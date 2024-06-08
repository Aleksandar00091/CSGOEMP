const { test, expect } = require('@playwright/test');

test('Visit CSGOEmpire main page', async ({ page }) => {
  // Go to the CSGOEmpire main page
  await page.goto('https://csgoempire.com');
  
  // Verify that the page loads by checking the title
  const pageTitle = await page.title();
  console.log('Page title:', pageTitle);
  expect(pageTitle).not.toBe('');
});