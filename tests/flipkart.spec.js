import { test, expect } from "@playwright/test";
test('flipkarte2e', async ({ page }) => {
    await page.goto('https://www.flipkart.com/');

    await page.getByRole('button', { name: '✕' }).click();
    await page.getByRole('textbox', { name: 'Search for Products, Brands' }).click();
    await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill('18 pro max');
    await page.getByRole('textbox', { name: 'Search for Products, Brands' }).press('Enter');
    const page1Promise = page.waitForEvent('popup');
  
    const product = await page.getByRole('link', { name: 'Apple iPhone 16 Pro Max (Black Titanium, 256 GB) Add to Compare Apple iPhone 16' });
    await product.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await product.click();
    const page1 = await page1Promise;
    await page1.locator('div').filter({ hasText: /^Buy nowat ₹0123456789,01234567890123456789,012345678901234567890123456789$/ }).nth(3).click();



});