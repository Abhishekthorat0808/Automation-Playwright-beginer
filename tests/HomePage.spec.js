import {test, expect} from "@playwright/test";
test("flipKart", async ({page}) => {

console.log("Web Page Open");
await page.goto("https://demoblaze.com/");

 const titleOfPage = await page.title();
console.log("Title Of current page is ", titleOfPage);
await expect(page).toHaveTitle("STORE");

const url= await page.url();
console.log("Pageurl is : ", url);

await expect(page).toHaveURL("https://demoblaze.com/");

await page.waitForTimeout(3000);

await page.close();
});