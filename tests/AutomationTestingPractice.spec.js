import { test, expect } from "@playwright/test";
import { waitForDebugger } from "node:inspector";

test("Automation Testing Practice", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //locators;
    let EnterName = await page.locator("//input[@placeholder='Enter Name' and @id='name']");
    await expect(EnterName).toHaveCount(1);
    console.log("check the locator count matches 1");


    //check that input box is empty
    await expect(EnterName).toBeEmpty();
    console.log("assertion to check Input box is empty");

    //check input box is visible
    await expect(EnterName).toBeVisible();
    console.log("Check that input box is visible");

    //check the input box is editable
    await expect(EnterName).toBeEditable();
    console.log("Input field is editable");

    //Check filed is empty before typing
    await expect(EnterName).toHaveValue('');
    console.log("Check the input box is empty");


    await EnterName.fill("Abhishek Thorat");
    console.log("User Enter name in input box");

    await expect(EnterName).toHaveValue("Abhishek Thorat");
    console.log("Validate User name in input box");


    await expect(EnterName).toHaveAttribute('placeholder', "Enter Name");
    console.log('PASS: Username placeholder is correct');

    await expect(EnterName).toHaveId("name");
    console.log('PASS: Username input ID is correct');




    let Email = await page.locator("//input[@id='email' and @placeholder='Enter EMail']");
    await Email.fill("Thoratabhishek0808@gmail.com");

    let PhoneNumber = await page.locator("//input[@id='phone' and @placeholder='Enter Phone']");
    await PhoneNumber.fill("8766009098");


    let AddressArea = await page.locator("//textarea[@class='form-control' and @id='textarea']");
    await AddressArea.fill("Shri-Krushna Society Lane no 3 sainathnagar kharadi Pune!");







    ////Radio Button
    let locatortext = await page.getByText('Gender:');
    await locatortext.scrollIntoViewIfNeeded();
    await expect(locatortext).toHaveText('Gender:');

    let radiobuttomMale = await page.getByText('Male', { exact: true })
    let radiobuttomFemale = await page.getByText('Female', { exact: true });
    await radiobuttomMale.check();
    await expect(await radiobuttomMale.isChecked()).toBeTruthy();


/*

    ///Handle Checkbox
    let checkbox = await page.locator("//input[@id='sunday' and @type='checkbox']");
    await checkbox.scrollIntoViewIfNeeded();
    await checkbox.check();
    await expect(await checkbox.isChecked()).toBeTruthy();
    console.log("Checkbox is checked");

*/
    let AllCheckBoxLocators = await page.$$("//input[@type='checkbox'][@class='form-check-input']");
    await expect(AllCheckBoxLocators).toHaveLength(7);

    for (let i = 0; i < AllCheckBoxLocators.length; i++) {
        // Read the label text next to this checkbox in the browser.
        let text = await AllCheckBoxLocators[i].evaluate(element => {
        return element.nextElementSibling.innerText.trim();
    });
        console.log("Checkbox text is: " + text);
        if (text === "Monday") {
            await AllCheckBoxLocators[i].check();
            console.log("Monday checkbox is checked");
            break;
        }

    }



    //DropDown
    let countryOptions = await page.locator("#country option").all();
    for (let i = 0; i < countryOptions.length; i++) {
        let text = (await countryOptions[i].textContent())?.trim();
        if (text?.includes("France")) {
            await page.locator("#country").selectOption({ label: text });
            console.log("France is selected from dropdown");
            break;
        }
    }


    await page.waitForTimeout(5000);
    await page.close();
});   