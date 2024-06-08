const { test, expect } = require('@playwright/test');

test('Test +0.01 button on CSGOEmpire roulette page', async ({ page }) => {
  // Go to the CSGOEmpire roulette page
  await page.goto('https://csgoempire.com/roulette');

  // Wait for the input box to be visible
  const inputBox = await page.waitForSelector('input[placeholder="Enter bet amount..."]', { state: 'visible', timeout: 10000 });

  // Get the initial value of the input box
  let initialValue = await inputBox.inputValue();
  console.log('Initial input box value:', initialValue);

  // Find and click the "+0.1" button
  const plusButton = await page.waitForSelector('button[data-v-a3a19079]:has-text("+ 0.1")', { state: 'visible', timeout: 10000 });
  await plusButton.click();

  // Get the updated value of the input box
  const updatedValue = await inputBox.inputValue();
  console.log('Updated input box value:', updatedValue);

  // Verify that the input box value has been updated to "0.1"
  expect(updatedValue).toBe('0.1');
});




