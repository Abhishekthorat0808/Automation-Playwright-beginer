///At a time only single radio button can selected


import { test, expect } from "@playwright/test";
test("CheckboxRadiobutton", async ({ page }) => {



await page.goto("https://testing.qaautomationlabs.com/radio-button.php");

const radiobutton = await page.locator("//input[@data-testid='radio-gender-male']");

// 1. Verify exactly one radio button exists
await expect(radiobutton).toHaveCount(1);
console.log('PASS: Exactly one Male radio button exists');
 
// 2. Verify radio button is visible
await expect(radiobutton).toBeVisible();
console.log('PASS: Male radio button is visible');

// 3. Verify radio button is enabled
await expect(radiobutton).toBeEnabled();
console.log('PASS: Male radio button is enabled');

// 4. Verify radio button is not disabled
await expect(radiobutton).not.toBeDisabled();
console.log('PASS: Male radio button is not disabled');

// 5. Verify input type is radio
await expect(radiobutton).toHaveAttribute('type','radio');
console.log('PASS: Input type is radio');

/*
// 6. Verify radio button ID
await expect(radiobutton).toHaveId("radio-gender-male");
console.log('PASS: Radio button ID is correct');
*/
await expect(await radiobutton.isChecked()).toBeFalsy();


// 8. Verify radio button is initially unchecked  check that is selected
await expect(radiobutton).not.toBeChecked();
console.log('PASS: Male radio button is not selected');




// 9. Select the Male radio button
//await page.check("//input[@data-testid='radio-gender-male']")
await radiobutton.check();
console.log('PASS: Male radio button selected');

 // 10. Verify radio button is checked // check whether It is select or not 
 await expect(radiobutton).toBeChecked();  
 console.log('PASS: Male radio button is selected');
await expect(radiobutton.isChecked()).toBeTruthy();  //same concept like toBeChecked()
console.log("check radio button is truthy");
 
// 11. Verify the radio button is required (if expected)
await expect(radiobutton).toHaveJSProperty('required', false); //if required field make it true
console.log('PASS: Radio button is required');
});
