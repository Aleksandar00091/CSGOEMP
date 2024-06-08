const { chromium } = require('playwright');
const { test, expect } = require('@playwright/test');

test('Navigate to page 2 of Race Rules on roulette page', async ({ page }) => {
  // Navigate to the roulette page
  await page.goto('URL_TO_ROULETTE_PAGE');

  // Wait for the "2" element to be visible
  const element = await page.$('span[data-v-078e16c5="2"]');
  if (!element) {
    console.error('Element not found');
    return;
  }

  // Check if the element is visible
  const isVisible = await element.isVisible();
  console.log('Element is visible:', isVisible);

  // Click on the "2" element
  await element.click();

  // Wait for the content of page 2 to load
  await page.waitForLoadState('networkidle');

  // Check if the page 2 content has loaded correctly
  const page2Content = await page.isVisible('.page-2-content');
  expect(page2Content).toBeTruthy();
});

