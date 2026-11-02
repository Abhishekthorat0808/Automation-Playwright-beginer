import { expect, test } from "@playwright/test";


test("amazon desing", async ({ page }) => {


    await page.goto("https://www.amazon.in/ref=nav_logo");
    await expect(page).toHaveURL("https://www.amazon.in/ref=nav_logo");
    console.log("Url Has been validate");

    const list = await page.$$("//li[@class='nav-li']/div");
    console.log(`Found ${list.length} elements`);

    for (const item of list) {
        const tablist = (await item.innerText()).trim();
        console.log(tablist);

        if (tablist === "Mobiles") {
            await item.click();
            break;
        }
    }

    const nokia = await page.locator("//*[@id='s-refinements']/div[4]/ul/li[7]/span/a/span");
    await nokia.scrollIntoViewIfNeeded();
    await nokia.click();



    const resultDivs = page.locator("//div[@class='sg-col-inner']/div");
    await resultDivs.first().waitFor();
    console.log(`Found ${await resultDivs.count()} div elements`);


    await page.waitForTimeout(4000);

});