import { test, expect } from "@playwright/test";
test("Random Click", async ({ page }) => {

    await page.goto("https://www.houzeo.com/");


    //Page Visited to Homes for sale across America
    await page.getByText('Florida', { exact: true }).scrollIntoViewIfNeeded();
    console.log("Page is scrolled to Homes for sale across America");
    await page.waitForTimeout(3000);



    //slide
    let slideleft = await page.getByRole('button', { name: /Next Slide/i });
    for (let i = 0; i < 6; i++) {
        await slideleft.click();

    }
    console.log("Slider Slides at the end");


    await page.waitForTimeout(3000);
    await page.waitForSelector("//p[contains(@class,'px-[14px] text-[22px] leading-[26px] z-30 font-semibold text-[#0C5AA5] absolute bottom-0 left-0')]");
    const citylocator = await page.locator("//p[contains(@class,'px-[14px] text-[22px] leading-[26px] z-30 font-semibold text-[#0C5AA5] absolute bottom-0 left-0')]");
    console.log("Total cities:", await citylocator.count());


     for (let i = 0; i < await citylocator.count(); i++) {

        const select = citylocator.nth(i);
        const city = (await select.textContent())?.trim();

        console.log("Printing city:", city);
         if (city?.includes("North Carolina")) {

            const [newPage] = await Promise.all([
                page.waitForEvent("popup"),
                page.getByRole("link", { name: "View homes for sale in North Carolina" }).click()
            ]);
            await newPage.waitForLoadState("domcontentloaded");

            console.log("New tab URL:", newPage.url());

            await expect(newPage).toHaveURL(/north-carolina/i);

            break;
        }
    }





































/*

    for (let select of citylocator) {


        let city = await select.textContent();
        console.log("Printing All 39 cities" + city);

        if (city.includes("North Carolina")) {
            await select.click();
            break;

        }
    }


*/

});