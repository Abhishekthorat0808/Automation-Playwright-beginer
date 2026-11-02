import { test, expect } from "@playwright/test";
test.skip("Upload Single File", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    let uploadsingle = await page.locator("//*[@id='singleFileInput']");
    await uploadsingle.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);

    //Upload Single Files
    await uploadsingle.setInputFiles('Test-Data/CV 2026-27 Purple.pdf/');
    await page.click("//*[@id='singleFileForm']/button");
    await page.close();

});

test.only("Upload MultipleFiles File", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    let file2 = await page.locator("//*[@id='multipleFilesInput']");
    await file2.scrollIntoViewIfNeeded();

    //Upload Multiple Files
    await file2.setInputFiles(['Test-Data/CV 2026-27 Black.pdf/', 'Test-Data/CV 2026-27 Purple.pdf/']);
    await page.waitForTimeout(4000);
   
   
    //Remove Files
    await file2.setInputFiles([]);

    await page.click("//*[@id='multipleFilesForm']/button");
    await page.waitForTimeout(4000);




});