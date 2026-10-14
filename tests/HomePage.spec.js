import {test, expect} from "@playwright/test";
test("flipKart", async ({page}) => {

    await page.goto("https://www.flipkart.com/");

    await page.waitForTimeout(3000);
});