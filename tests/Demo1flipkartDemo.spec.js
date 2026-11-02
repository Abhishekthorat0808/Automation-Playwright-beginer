import { test, expect } from "@playwright/test";

test("Flipkart Test", async ({ page }) => {


    await page.goto("https://www.flipkart.com/");


    await page.waitForTimeout(5000);
    const closeButton = page.getByRole('button', { name: '✕' });
    if (await closeButton.isVisible()) {
        await closeButton.click();
    }

    await page.waitForSelector("//div[@class='css-g5y9jx r-18u37iz']/div/div/div/div/a");
    let HomePageAnchorLinks = await page.$$("//div[@class='css-g5y9jx r-18u37iz']/div/div/div/div/a");
    expect(HomePageAnchorLinks).toHaveLength(14);

    for (let i = 0; i < HomePageAnchorLinks.length; i++) {
        let text = await HomePageAnchorLinks[i].innerText();
        console.log(text);
        if (text === "Mobiles") {
            await HomePageAnchorLinks[i].click();
            console.log("Click on mobiles devices");
            break;
        }
    }




    await page.waitForSelector("//div[contains(text(),'OPPO ')]");
    await page.click("//div[contains(text(),'OPPO ')]");


    await page.waitForTimeout(5000);
    await page.close();

});