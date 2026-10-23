import { test, expect } from "@playwright/test";
test("hover mouse Action", async ({ page }) => {

    await page.goto("https://www.flipkart.com/");
    
    
    const desktop=await page.locator("//*[@id='container']/div/div[1]/div/div/div/div/div/div/div/div/div/div[1]/div/div/div[2]/div/div/div/div/div/header/div[1]/div[1]/form/div/div/input");
    const mac = await page.locator("//*[@id='container']/div/div[1]/div[1]/div[2]/div[5]/div/div/div/div");;
    const x23support = await page.locator("//*[@id='container']/div/div[1]/div[1]/div[2]/div[5]/div/div/div[2]/div[2]/div/ul/li[2]/a/div");
    await desktop.fill("Mobile");
    await desktop.press('Enter');
    await page.waitForTimeout(3000);

    await mac.hover();
    await x23support.hover();
    
    await x23support.click();
    await page.waitForTimeout(3000);
    await page.close();
});