import { test, expect } from "@playwright/test";
test.skip("Alert", async ({ page }) => {
    //Alert Dailog Popup
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain("I am an alert box!");
        await dialog.accept();
    })
    await page.getByText('Simple Alert', { exact: true }).click();
    await page.waitForTimeout(3000);
});

///confirm alert
test.skip("Confirmation Dailog alert with ok & Cancle Button", async ({ page }) => {
    // Dailog window handler
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain("Press a button!");
        //await dialog.accept();//close by ok button 
        await dialog.dismiss(); //close by cancel button
    })
    await page.getByRole('button', { name: 'Confirmation Alert' }).click();
    await expect(await page.getByText('You pressed Cancel!', { exact: true })).toHaveText("You pressed OK!");
    await page.waitForTimeout(3000);

});

//Prompt Alert
test("Prompt Alert", async ({ page }) => {
    // Dailog window handler
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain("Please enter your name:");
        expect(dialog.defaultValue()).toContain("Harry Potter");
        await dialog.accept("Abhishek");//close by ok button 
        await page.waitForTimeout(3000);
        //await dialog.dismiss(); //close by cancel button
    });
    await page.getByRole('button', { name: 'Prompt Alert' }).click();
    await expect(await page.locator('#demo')).toHaveText("Hello Abhishek! How are you today?");
    await page.waitForTimeout(3000);
});