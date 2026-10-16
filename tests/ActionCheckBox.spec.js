import { test, expect } from "@playwright/test";
import { waitForDebugger } from "node:inspector";
test("Checkbox test", async ({ page }) => {

    await page.goto("https://testing.qaautomationlabs.com/checkbox.php");
    const checkbox = await page.locator("//input[@id='multichk1']");


////Single CheckBox Validation
    // 1. Verify exactly one checkbox exists
    await expect(checkbox).toHaveCount(1);
    console.log("1.PASS: Exactly one checkbox exists");

    // 2. Verify visibility
    await expect(checkbox).toBeVisible();
    console.log("2.PASS: Checkbox is visible");

    // 3. Verify enabled state
    await expect(checkbox).toBeEnabled();
    console.log("3.PASS: Checkbox is enabled");

    // 4. Verify initially unchecked
    await expect(checkbox).not.toBeChecked();
    console.log("4.PASS: Checkbox is initially unchecked");

    // 5. Verify input type
    await expect(checkbox).toHaveAttribute("type", "checkbox");
    console.log("5.PASS: Input type is checkbox");

    // 6. Verify ID
    await expect(checkbox).toHaveId("multichk1");
    console.log("6.PASS: Checkbox ID is correct");

    // 7. Verify CSS class
    await expect(checkbox).toHaveClass(
        "myCheckbox mr-2 font-weight-lighter");
    console.log("7.PASS: Checkbox CSS class is correct");

    // 8. Verify unchecked using JavaScript boolean
    expect(await checkbox.isChecked()).toBeFalsy();
    console.log("8.PASS: isChecked() returns false");

    // 9. Check the checkbox
    await checkbox.check();
    console.log("9.PASS: Checkbox checked successfully");

    // 10. Verify checked using JavaScript boolean
    expect(await checkbox.isChecked()).toBeTruthy();
    console.log("10.PASS: isChecked() returns true");

    // 11. Uncheck the checkbox
    await checkbox.uncheck();
    console.log("11.PASS: Checkbox unchecked successfully");

    // 12. Verify unchecked
    await expect(checkbox).not.toBeChecked();
    console.log("12.PASS: Checkbox is unchecked");

    // 13. Set checkbox to checked
    await checkbox.setChecked(true);
    console.log("13.PASS: setChecked(true) executed successfully");

    // 14. Verify checked
    await expect(checkbox).toBeChecked();
    console.log("14.PASS: Checkbox is checked");

    console.log("SUCCESS: All checkbox assertions passed!");


   page.waitForTimeout(3000);

    await page.close();

});




