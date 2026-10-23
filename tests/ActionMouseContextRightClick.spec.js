import { test, expect } from "@playwright/test";

test("Mouse Action", async ({ page }) => {

    await page.goto("http://swisnl.github.io/jQuery-contextMenu/demo.html");
    await page.getByText('right click me', { exact: true }).click({ button: 'right' });
    await page.waitForTimeout(5000);



    
});