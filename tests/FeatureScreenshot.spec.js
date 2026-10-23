import { test, expect } from "@playwright/test";


//visible area
test.skip("screenshot for visible are", async ({ page }) => {

    await page.goto("https://www.houzeo.com/");
    await page.screenshot({ path: 'ScreenShot/' + Date.now() + 'HomePage.png', fullPage: false });

});

///full page of current page
test.skip("screenshot for FullPage", async ({ page }) => {

    await page.goto("https://www.houzeo.com/");
    await page.screenshot({ path: 'ScreenShot/' + Date.now() + 'Homepage.png', fullPage: true });
});



//Of element 
test("screenshot for Locator", async ({ page }) => {

    await page.goto("https://www.houzeo.com/");
    const locatorsdiv = await page.locator("//img[@alt='Beautiful home exterior representing property buying and selling services' and @class='w-full h-full object-cover']");
    await locatorsdiv.screenshot({ path: 'ScreenShot/' + Date.now() + 'Homepage.png', fullPage: true });
});

