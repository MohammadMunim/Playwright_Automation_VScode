// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {

// adding trace options
await page.context().tracing.start({ screenshots: true, snapshots: true });

  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // stop tracing and export it into a zip archive
  await page.context().tracing.stop({ path: 'Test-trace.zip' });
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

  
});
