import { test, expect } from "@playwright/test";
test("multipleCheckBoxes", async ({ page }) => {


//multiple checkbox selectionsA
    await page.goto("https://testing.qaautomationlabs.com/checkbox.php");
    let checkbox = [
        "//input[@type='checkbox' and @id='multichk1']",
        "//input[@type='checkbox' and @id='multichk3']",
        "//input[@type='checkbox' and @id='multichk4']"];

    for (const check of checkbox) {
        await page.locator(check).check();
        await expect(await page.locator(check).isChecked);
    }


    for (let check2 of checkbox) { //unselect multipe locators

        if (await page.locator(check2).isChecked()) {
            await page.locator(check2).uncheck();
        }
    };



});