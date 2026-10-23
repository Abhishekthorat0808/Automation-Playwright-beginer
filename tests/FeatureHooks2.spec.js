import { test, expect } from "@playwright/test";

let page;
test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    ///Homepage
    await page.goto("https://demoblaze.com/");

    //tap on login
    await page.locator("//a[@id='login2' and @class='nav-link']").click();

    //username & password Enter
    await page.locator("//input[@type='text' and @id='loginusername']").fill("pavanol");
    await page.locator("//input[@type='password' and @id='loginpassword']").fill("test@123");
    await page.locator("//button[@type='button' and @onclick='logIn()']").click();
    await expect(await page.locator("//a[contains(text(),'Welcome')]").textContent("Welcome"));


});


test.afterAll("Logout", async () => {
    //logout
    await page.locator("//a[contains(text(),'Log out')]").click();

})


test("Test Count And add to cart", async () => {


    await expect(await page.$$("//div[@class='card h-100']")).toHaveLength(9);
    console.log("Length is validated and pass");

    await page.waitForTimeout(3000);




    await page.locator("//a[contains(text(),'Samsung galaxy s6')]").click();



    await page.locator("//a[contains(text(),'Add to cart')]").click();

    page.on("dialog", async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    });

    await page.waitForTimeout(3000);
});