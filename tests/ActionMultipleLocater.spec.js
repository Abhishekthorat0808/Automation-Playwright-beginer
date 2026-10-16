import{test,expect} from "@playwright/test";
test("importAllProductLink",async ({page})=>{

await page.goto("https://demoblaze.com/");

const store =await page.$$("//a");

for(let x of store){
  const textcapture = await x.textContent();
    console.log(textcapture);
}

//page.waitForSelector() is used to wait until an element appears 
// in the DOM or reaches a specified state before performing the next action.

//List the product of main page
page.waitForSelector("//div[@id='tbodyid']//div/h4/a"); 
const products = await page.$$("//div[@id='tbodyid']//div/h4/a");

for(const product of products){
    const productlist = await product.textContent();
    console.log(productlist);
}

});