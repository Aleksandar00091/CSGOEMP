const { test, expect } = require('@playwright/test');

test('Test input box on CSGOEmpire roulette page', async ({ page }) => {
  // Go to the CSGOEmpire roulette page
  await page.goto('https://csgoempire.com/roulette');

  // Wait for the input box to be visible
  const inputBox = await page.waitForSelector('input[placeholder="Enter bet amount..."]', { state: 'visible', timeout: 10000 });

  // Type the value "1" into the input box
  await inputBox.type('1');

  // Get the value of the input box
  const inputValue = await inputBox.inputValue();
  console.log('Input box value:', inputValue);

  // Verify that the input box value is "1"
  expect(inputValue).toBe('1');
});
