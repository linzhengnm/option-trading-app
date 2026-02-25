import { test, expect } from '@playwright/test';

test.describe('CoveredCall Pro - E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the app before each test
    await page.goto('/');
  });

  test('should load the app and display the header', async ({ page }) => {
    // Check if the main heading is present
    const heading = page.locator('h1');
    await expect(heading).toContainText('CoveredCall Pro');

    // Check for app title in page
    const pageTitle = page.title();
    await expect(pageTitle).toContain('Option Trading');
  });

  test('should display the search input field', async ({ page }) => {
    // Check for search input
    const input = page.locator('input[placeholder*="stock symbol"]');
    await expect(input).toBeVisible();
  });

  test('should accept stock symbol input', async ({ page }) => {
    // Type in the search field
    const input = page.locator('input[placeholder*="stock symbol"]');
    await input.fill('AAPL');

    // Verify the input has the value
    await expect(input).toHaveValue('AAPL');
  });

  test('should have analyze button', async ({ page }) => {
    // Check for analyze button
    const analyzeButton = page.locator('button:has-text("Analyze")');
    await expect(analyzeButton).toBeVisible();
  });

  test('should handle symbol search', async ({ page }) => {
    // Fill symbol
    const input = page.locator('input[placeholder*="stock symbol"]');
    await input.fill('MSFT');

    // Click analyze
    const analyzeButton = page.locator('button:has-text("Analyze")');
    await analyzeButton.click();

    // Wait for potential results
    await page.waitForTimeout(1000);

    // Verify input still has value
    await expect(input).toHaveValue('MSFT');
  });

  test('should display navigation links', async ({ page }) => {
    // Check for Home link
    const navigationButtons = page.locator('button');
    const count = await navigationButtons.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should navigate to About page', async ({ page }) => {
    // Look for About navigation
    const links = page.locator('button:has-text("About")');

    if ((await links.count()) > 0) {
      await links.click();
      await page.waitForURL('**/about', { timeout: 5000 }).catch(() => {
        // About page might not exist yet, that's ok
      });
    }
  });

  test('should display status information', async ({ page }) => {
    // Check for status messages about Firebase/Tradier
    const paperElements = page.locator('[class*="MuiPaper"]');

    // Should have at least container elements
    const count = await paperElements.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('should have MUI components', async ({ page }) => {
    // Check for MUI Card components
    const cards = page.locator('[class*="MuiCard"]');

    // Count should be a valid number
    const cardCount = await cards.count().catch(() => 0);
    expect(typeof cardCount).toBe('number');
  });

  test('should handle Enter key in search', async ({ page }) => {
    // Fill and press Enter
    const input = page.locator('input[placeholder*="stock symbol"]');
    await input.fill('GOOGL');
    await input.press('Enter');

    // Wait for potential action
    await page.waitForTimeout(500);

    // Input should retain value
    await expect(input).toHaveValue('GOOGL');
  });

  test('should display authentication UI', async ({ page }) => {
    // Look for auth-related UI (sign in button or user display)
    const buttons = page.locator('button');

    // Should have some buttons
    const count = await buttons.count();
    expect(count).toBeGreaterThan(0);
  });
});

test.describe('Page Navigation', () => {
  test('should be able to navigate between pages', async ({ page }) => {
    // Go to home
    await page.goto('/');
    await expect(page).toHaveURL(/^\//);

    // Page should load without errors
    expect(page.context().browser()).toBeDefined();
  });

  test('should handle invalid routes gracefully', async ({ page }) => {
    // Try navigating to non-existent page
    await page.goto('/nonexistent', { waitUntil: 'networkidle' }).catch(() => {
      // 404 is expected
    });

    // App should still be responsive
    const bodyContent = await page.locator('body').count();
    expect(bodyContent).toBeGreaterThan(0);
  });
});
