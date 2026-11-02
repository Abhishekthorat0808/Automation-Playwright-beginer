import { test, expect } from "@playwright/test";
test("ActionMousedoubleClick", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    let dbclickbtn = await page.locator("//*[@id='HTML10']/div[1]/button");
    let inputbox= await page.locator("//*[@id='field2' and @type='text']");
    await dbclickbtn.scrollIntoViewIfNeeded();
    await dbclickbtn.dblclick();
    await expect(inputbox).toHaveValue("Hello World!");
    

    await page.waitForTimeout(5000);
});