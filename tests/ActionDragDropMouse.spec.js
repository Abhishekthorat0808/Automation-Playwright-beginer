import { test, expect } from "@playwright/test";
test("DragDrop", async ({ page }) => {


    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    await page.locator("//*[@id='HTML2']/h2").scrollIntoViewIfNeeded();
    let elementToDrag = await page.locator("//div[@id='draggable']");
    let releseinBox = await page.locator("//div[@id='droppable']");

    //Mouse drag Approach 1
    await elementToDrag.hover(); //hover the element 
    await page.mouse.down(); ///click down button on hover element to hold the element

    //mouse drag to location
    await releseinBox.hover();
    await page.mouse.up();

    const response = await page.reload();

    console.log("Page reloaded");

    //Mouse drag Approach 2
    await page.locator("//*[@id='HTML2']/h2").scrollIntoViewIfNeeded();
    await elementToDrag.dragTo(releseinBox);

    await page.waitForTimeout(5000);
    await page.close();
});