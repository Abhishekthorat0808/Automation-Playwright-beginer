import { test, expect } from "@playwright/test";


test("AmazonAddToCartFeatureTest", async ({ page }) => {

await page.goto('https://www.amazon.in/');
  await page.getByRole('link', { name: 'Mobiles' }).click();
  await page.locator("//*[@id='s-refinements']/div[4]/ul/li[3]/span/a/span").click();
  const page1Promise = page.waitForEvent('popup');
   await page.locator('div:nth-child(2) > .rush-component > .a-link-normal').first().click();
//   const page1 = await page1Promise;
//   await page1.getByRole('button', { name: 'Add to cart', exact: true }).click();
//   await page1.getByRole('heading', { name: 'Added to cart' }).click();
  


});