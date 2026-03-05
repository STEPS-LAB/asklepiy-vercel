import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should display the homepage correctly', async ({ page }) => {
    await page.goto('/ua');

    // Check title
    await expect(page).toHaveTitle(/Асклепій/);

    // Check hero section
    await expect(page.getByText('Сучасна медицина з турботою про вас')).toBeVisible();

    // Check navigation
    await expect(page.getByText('Напрямки')).toBeVisible();
    await expect(page.getByText('Ціни')).toBeVisible();
    await expect(page.getByText('Контакти')).toBeVisible();
  });

  test('should navigate to doctors page', async ({ page }) => {
    await page.goto('/ua');

    await page.getByText('Лікарі').click();
    await expect(page).toHaveURL(/\/ua\/doctors/);
    await expect(page.getByText('Наші лікарі')).toBeVisible();
  });

  test('should open booking modal', async ({ page }) => {
    await page.goto('/ua');

    const bookButton = page.getByText('Записатися на прийом').first();
    await bookButton.click();

    // Wait for modal to open
    await expect(page.getByText('Запис на прийом')).toBeVisible();
  });
});

test.describe('Language Switching', () => {
  test('should switch between Ukrainian and English', async ({ page }) => {
    await page.goto('/ua');

    // Check Ukrainian content
    await expect(page.getByText('Напрямки')).toBeVisible();

    // Switch to English
    await page.getByText('UA').click();
    await page.getByText('EN').click();

    // Wait for navigation
    await page.waitForURL(/\/en/);

    // Check English content
    await expect(page.getByText('Services')).toBeVisible();
    await expect(page.getByText('Prices')).toBeVisible();
  });
});

test.describe('Booking Flow', () => {
  test('should complete booking flow', async ({ page }) => {
    await page.goto('/ua');

    // Open booking modal
    const bookButton = page.getByText('Записатися на прийом').first();
    await bookButton.click();

    // Step 1: Select service
    await page.getByText('Консультація терапевта').click();
    await page.getByText('Далі').click();

    // Step 2: Select doctor
    await page.getByText('д-р Коваленко').click();
    await page.getByText('Далі').click();

    // Step 3: Select date and time
    await page.getByText('09:00').first().click();
    await page.getByText('Далі').click();

    // Step 4: Confirm
    await expect(page.getByText('Підтвердьте запис')).toBeVisible();
  });
});

test.describe('Dashboard', () => {
  test('should show sign-in prompt for unauthorized users', async ({ page }) => {
    await page.goto('/ua/dashboard');

    await expect(page.getByText('Увійдіть для перегляду кабінету')).toBeVisible();
    await expect(page.getByText('Увійти')).toBeVisible();
  });
});

test.describe('Mobile Responsiveness', () => {
  test('should display mobile menu correctly', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/ua');

    // Open mobile menu
    const menuButton = page.locator('button[aria-label="Open menu"]');
    await menuButton.click();

    // Check mobile menu content
    await expect(page.getByText('Контакти')).toBeVisible();
    await expect(page.getByText('Реєстратура')).toBeVisible();
  });

  test('should display responsive layout on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/ua/doctors');

    // Check doctors grid is responsive
    await expect(page.getByText('Наші лікарі')).toBeVisible();
  });
});
