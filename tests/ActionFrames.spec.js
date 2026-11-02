import { test, expect } from "@playwright/test";
test("Frames", async ({ page }) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");

    let frammessize = await page.frames();
    console.log(frammessize.length);


    //frame Locator Using css locater for framw
    const frame1 = await page.frameLocator("frame[src='frame_1.html']").locator("//input[@name='mytext1']");
    await frame1.fill("Hello");


    //approach 2
    //const fram3= await page.frame("namelocator");
    const frame2 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1' });
    const locv = await frame2.locator("//input[@name='mytext1']");
    await locv.fill("hellow");
});