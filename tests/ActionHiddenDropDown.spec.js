import { test, expect } from "@playwright/test";
test("HiddenDropDown", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByRole('textbox', { name: 'Username' }).fill("Admin");
    await page.getByPlaceholder('Password').fill("admin123");
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByText('PIM').click();


    await page.getByText('-- Select --').nth(1).click();

    await page.waitForTimeout(3000);
    const locaters = await page.$$("//div[@class='oxd-select-option']");

    let value = await expect(locaters).toHaveLength(29);
    console.log(value);


    for (let x of locaters) {
        let store = await x.textContent();
        console.log(store);

        if (store.includes('HR Associate')) {

            await x.click();
            console.log("HR Associate is selected");
            break;


        }
    }

    await page.waitForTimeout(3000);
    await page.close();
});