import { test, expect, chromium } from "@playwright/test";
test("Handle Pages & multiple Tabs", async () => {

    const browser = await chromium.launch();  ///Create chrome  
    /// A browser context is like a separate browser session. It has its own cookies, local storage, and pages.
    const context = await browser.newContext();

    const page1 = await context.newPage();  //Tab1
    const page2 = await context.newPage();  //Tab2 

    const allpages = context.pages();
    console.log("No of Pages is created : ", allpages.length);

    page1.goto("https://www.boat-lifestyle.com/collections/all-products");
    await expect(page1).toHaveTitle("Shop All boAt Products | Earbuds, Speakers & Chargers");


    page2.goto("https://www.boat-lifestyle.com/collections/all-products");
    await expect(page2).toHaveTitle("Shop All boAt Products | Earbuds, Speakers & Chargers");
    await page1.waitForTimeout(3000);


});



test.only("Browser tabswitch", async () => {

    const browser = await chromium.launch();  ///Create chrome  
    /// A browser context is like a separate browser session. It has its own cookies, local storage, and pages.
    const context = await browser.newContext();

    const page1 = await context.newPage();  //Tab1

    const allpages = context.pages();
    console.log("No of Pages is created : ", allpages.length);

    page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page1).toHaveTitle("OrangeHRM");


    const [newpage] = await Promise.all([
        context.waitForEvent('page'),
        page1.getByRole('link', { name: 'OrangeHRM, Inc' }).click()
    ]);
    await expect(newpage).toHaveTitle("OrangeHRM: All in One HR Software for Businesses | OrangeHRM");
    await page1.waitForTimeout(3000);
    await page1.bringToFront();
    await newpage.waitForTimeout(3000);
    await newpage.bringToFront();

    await page1.waitForTimeout(3000);
    await newpage.waitForTimeout(3000);

}); 