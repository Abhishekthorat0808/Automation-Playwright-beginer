import { test, expect } from "@playwright/test";
test("InputBoxRadioButton", async ({ page }) => {

    await page.goto("https://testing.qaautomationlabs.com/form.php");
    const inputbox = await page.locator("//input[@id='firstname' or @data-testid='form-firstname']");


    ///Input Field Assertions 
    // 1. toHaveCount(1)
    // Checks whether exactly one element matches the locator.
    // If zero or multiple elements match, the assertion fails.
    await expect(inputbox).toHaveCount(1);
    console.log('PASS: Exactly one username input field exists');

    await expect(inputbox).toBeEmpty();
    console.log("Pass : Check input box is empty");

    // 2. toBeVisible()
    // Checks whether the username field is visible to the user.
    await expect(inputbox).toBeVisible();
    console.log('PASS: Username input field is visible');

    // 3. toBeEnabled()
    // Checks whether the username field is enabled and not disabled.
    // A disabled field cannot normally be edited by the user.
    await expect(inputbox).toBeEnabled();
    console.log('PASS: Username input field is enabled');


    // 4. toBeEditable()
    // Checks whether the username field can be edited.
    // It must not be disabled or read-only.
    await expect(inputbox).toBeEditable();
    console.log('PASS: Username input field is editable');


    // 5. toHaveValue('')
    // Checks whether the input field has an empty value.
    // This is useful for validating the initial state of a form.
    await expect(inputbox).toHaveValue('');
    console.log('PASS: Username input field is empty');

    // Enter a username into the input field
    await inputbox.fill("ThoratAbhishek0808@gmail.com");
    console.log("Pass : Enterd Username in input field");


    // 6. toHaveValue('ThoratAbhishek0808@gmail.com')
    // Checks whether the input field contains exactly "ThoratAbhishek0808@gmail.com".
    await expect(inputbox).toHaveValue("ThoratAbhishek0808@gmail.com");
    console.log('PASS: Username field contains UserName');

    // 7. toHaveAttribute('placeholder', 'Enter username')
    // Checks whether the input has the expected placeholder attribute.
    await expect(inputbox).toHaveAttribute('placeholder', 'Enter your first name');
    console.log('PASS: Username placeholder is correct');


    // 8. Verify the input ID (example)
    await expect(inputbox).toHaveId('firstname');
    console.log('PASS: Username input ID is correct');

    // 9. Verify the input is not read-only
    await expect(inputbox).toHaveJSProperty('readOnly', false);
    console.log('PASS: Input is not read-only');

    // 10. Verify the input is marked as required (example)
    await expect(inputbox).toHaveJSProperty('required', true);
    console.log('PASS: Username field is required');




    console.log('All input field assertions completed successfully');

});