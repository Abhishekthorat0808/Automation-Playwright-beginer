import { test, expect } from '@playwright/test';

test('Auto suggest dropdown', async ({ page }) => {
    await page.goto("https://www.redbus.in/");
    await page.locator("//input[@id='srcinput']").fill("delhi");

    await page.waitForSelector("//div[@class='listHeader___815346' and @role='heading']");
    const alltext = await page.$$("//div[@class='listHeader___815346' and @role='heading']");

    for (let text of alltext) {
        let g = await text.textContent();
        console.log(g);
        if (g.includes("Aurangabad (Maharashtra)")) {
            await text.click();

            console.log("City is selected");
            break;
        }
    }

    await page.waitForTimeout(3000);

    await page.close();
});