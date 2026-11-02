import { test, expect } from "@playwright/test";
import { text } from "node:stream/consumers";
test("Keyboard Actions", async ({ page }) => {



    await page.goto("https://gotranscript.com/text-compare");

    let text1 = await page.locator("//*[@id='diff']/form/div[1]/div[1]/textarea");
    await text1.fill("welcome to the automation");
    //await text1.type("welcome to the automation");

    //ctrl+A - Select all text
    await page.keyboard.press('Control+A');

    //Ctrl+c --Copy Text
    await page.keyboard.press('Control+C');

    //tab -- If only one key Use up & down method
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');

    //Ctrl+v- Paste Text
    await page.keyboard.press('Control+V');

    await page.waitForTimeout(3000);

});