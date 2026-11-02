import { test, expect } from "@playwright/test";
test("Amazon", async ({ page }) => {


    await page.goto("https://www.amazon.in/ref=nav_logo");

    let mobileLocater = await page.locator("//a[contains(text(),'Mobiles')]");
    await expect(mobileLocater).toBeVisible;

    await mobileLocater.click();

    let js = await page.locator("//*[@id='s-refinements']/div[4]/ul/li[9]/span/a/span");
    
    await js.scrollIntoViewIfNeeded();
     await page.waitForTimeout(3000);
    await js.click();



    let selectdropdown = await page.locator("//select[@id='searchDropdownBox' and @name='url']");
    await selectdropdown.selectOption({ value: 'search-alias=todays-deals' });
    await page.waitForTimeout(3000);

});