import { test, expect } from '@playwright/test';

test('searches for T-shirts and verifies the faded short sleeve product', async ({ page }) => {
  await page.goto('http://www.automationpractice.pl/index.php');

  await page.locator('input[name="search_query"]').fill('T-shirts');
  await page.locator('button[name="submit_search"]').click();

  await expect(page.getByText('Faded Short Sleeve T-shirts', { exact: true })).toBeVisible();
});