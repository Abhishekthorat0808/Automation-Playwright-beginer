import { test, expect } from "@playwright/test";
test("InnerFrame", async ({ page }) => {


    await page.goto("https://ui.vision/demo/webtest/frames/");

    console.log(await page.frames().length);
    ///frame
    // const frame2= await page.frameLocator("frame[src='frame_3.html']");
    const frame3 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3' });
    await frame3.locator("input[name='mytext3']").fill("Hellow");
    

    //InnerFrame
    const innerframe1 = frame3.childFrames();
    console.log(innerframe1.length);
    const textInput = frame3.locator("input[name='mytext3']");
    await expect(textInput).toBeVisible({ timeout: 3000 });
    await textInput.click();
    await page.waitForTimeout(5000);
});