    import {test ,expect } from "@playwright/test";
    test("Assertion test" , async ({page}) => {
    await page.goto("https://testing.qaautomationlabs.com/");

///Hard assertions


    ///expect(page).toHaveURL()
    await expect(page).toHaveURL("https://testing.qaautomationlabs.com/");

    //expect(page).toHaveTitle()			Page has title
    await expect(page).toHaveTitle("UI Automation Playground — Free Practice Site for Playwright, Selenium & Cypress | QA Automation Labs");


    //toBeVisible();
    await expect(page.getByTestId('header-logo-link')).toBeVisible();

    //toBeEnabled();
    await expect(page.getByTestId('header-search')).toBeEnabled();

    //toBeChecked();
    await page.getByRole('link', { name: ' Radio Button', exact: true }).click();

    const radiobutton = await page.getByTestId('radio-gender-male');
    await radiobutton.click();
    await expect(radiobutton).toBeChecked();


    //checkbox
    await page.getByRole('link', { name: ' Checkbox', exact: true }).click();
    await page.getByText('Check me!').click();
    const checkbox = await page.getByTestId('checkbox-single');
    await checkbox.check();
    await expect(checkbox).toBeChecked();


///check that if current element having the attribute or not

    await page.getByRole('link', { name: ' Radio Button' }).click();
    const checkattribute= await page.locator("//button[@onclick='showSelectedGender()']");
    await expect(checkattribute).toHaveAttribute('title','Show Selected Gender');



    //tohavetext() 
await expect(await page.locator("//span[@class='brand-text font-weight-bold']")).toHaveText("Testing Tools");

    //toconatinstext
await expect(await page.locator("//span[@class='brand-text font-weight-bold']")).toContainText("Testing");

//toHaveValue Check wheather the value entered in input box is correct
 await page.getByRole('link', { name: ' Form' }).click();
  await page.getByTestId('form-firstname').click();
  await page.getByTestId('form-firstname').fill('thoratabhishek0808@gmail.com');
  await expect(await page.getByTestId('form-firstname')).toHaveValue("thoratabhishek0808@gmail.com");



  await page.goto("https://www.boat-lifestyle.com/");
   await page.getByRole('searchbox', { name: 'Search' }).click();
  await expect(await page.locator("//div[@class='algolia-trending-item']//span")).toHaveCount(26);
});