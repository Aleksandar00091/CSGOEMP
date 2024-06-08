const { test, expect } = require('@playwright/test');

test('Test sound button functionality on CSGOEmpire roulette page', async ({ page }) => {
  // Go to the CSGOEmpire roulette page
  await page.goto('https://csgoempire.com/roulette');

  // Find the sound button SVG element
  const soundButtonSvg = await page.waitForSelector('svg[data-v-d5c84740]');

  // Verify that the sound button SVG element is clickable
  expect(soundButtonSvg).not.toBeNull();

  // Click the sound button SVG element
  await soundButtonSvg.click();

  // Wait for a brief moment for the sound state to update
  await page.waitForTimeout(500);

  // Get the updated text of the sound button
  const updatedButtonText = await page.evaluate(() => {
    return document.querySelector('span[data-v-078e16c5]').textContent.trim();
  });

  // Verify that the button text changes after clicking
  expect(updatedButtonText).not.toBe('Sound on');
});
