import {test, expect} from "@playwright/test";
test("", async ({page}) => {
 
    await page.goto("https://demoblaze.com/");
   
    //Click on login button - property locater
    //await page.locator("id=login2").click();
    await page.click("id=login2");


    //Provide username --css
    await page.locator("#loginusername").fill("pavanol");
    //await page.fill("#loginusername","pavanol");
    //await page.type("#loginusername","pavanol");

    //Provide password -- css
    await page.locator("input[id=loginpassword]").fill("test@123");

    //click on login button --xpath
    await page.locator("//button[normalize-space()='Log in']").click();
    

    ///verify logoutbutton'

   // const logout=await page.locator("//a[@id='logout2']");
   // await expect(logout).toBeVisible();
   await expect(page.locator("//a[@id='logout2']")).toBeVisible();

    page.close();
});