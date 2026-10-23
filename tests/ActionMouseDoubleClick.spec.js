import { test, expect } from "@playwright/test";
test("ActionMousedoubleClick", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    let dbclickbtn = await page.locator("//*[@id='HTML10']/div[1]/button");
    await dbclickbtn.scrollIntoViewIfNeeded();
    await dbclickbtn.dblclick();
    await page.waitForTimeout(5000);
});