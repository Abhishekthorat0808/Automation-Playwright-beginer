import { test, expect } from "@playwright/test";
import { stat } from "node:fs";
test("DropDown", async ({ page }) => {


  await page.goto("https://testautomationpractice.blogspot.com/");

  //multiple ways to select option from dropdown
  //Using Lable
  //await page.locator("//select[@class='form-control' and @id='country']").selectOption({label : 'India'});
  //Direct value
  //await page.locator("//select[@class='form-control' and @id='country']").selectOption('India');
  //using value
  //await page.locator("//select[@class='form-control' and @id='country']").selectOption({ value: 'india' });
  //using index value but starts from 0 like array
  //await page.locator("//select[@class='form-control' and @id='country']").selectOption({index : 3});
  await page.selectOption("//select[@class='form-control' and @id='country']", 'India');
  console.log("Pass : India Option is selected");





  //Value Attribute
  //Assertions
  // 1. Validate dropdown visibility
  await expect(await page.locator("//select[@class='form-control' and @id='country']")).toBeVisible();
  console.log('PASS: Dropdown is visible');


  // 2. Validate enabled
  await expect(await page.locator("//select[@class='form-control' and @id='country']")).toBeEnabled();
  console.log('PASS: Dropdown is enabled');

  // 3. Validate option count
  await expect(page.locator("//select[@id='country']//option")).toHaveCount(10);
  console.log('PASS: Dropdown contains 10 options');

  //5 Prrinting options cound value 
  const dropdownoptions = await page.$$("//select[@id='country']//option");
  console.log("Print dropdown options : " + dropdownoptions.length);
  await expect(dropdownoptions.length).toBe(10);


  // 6. Validate selected value
  await expect(await page.locator("//select[@class='form-control' and @id='country']")).toHaveValue('india');
  console.log('PASS: Selected value is india');

  // 7. Validate selected option text
  await expect(await page.locator("//select[@class='form-control' and @id='country']")).toContainText("India")
  console.log('PASS: Selected option text is India');

  ///presence of value in the dropdown - approach 1
  // Get all dropdown option texts
  const options = await page.locator("#country option").allTextContents();
  // Remove extra spaces and newline characters
  const countryOptions = options.map(option => option.trim());
  // Validate India is present
  expect(countryOptions).toContain("India");
  console.log("PASS: India is present in the dropdown");

  /*
  //printing all option in text format
  const dropdownp1 = await page.$$("//select[@id='country']//option");
  let status = false;
  for(let option of dropdownp1){
    let value=await option.textContent();
  if (value.includes('France')){
    status = true;
    break;
  }
  }
  expect(status).toBeTruthy();
     
    await page.waitForTimeout(5000);
  */


  //printing all option in text format
  const dropdownp1 = await page.$$("//select[@id='country']//option");
  for (let option of dropdownp1) {
    let value = await option.textContent();
    if (value.includes('France')) {
      await page.selectOption("#country", value);
      break;
    }
  }

});