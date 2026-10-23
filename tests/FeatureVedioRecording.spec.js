import { test, expect } from "@playwright/test";
test.use({ video: "on" });

test.use({
    video: "on"
});

let page;
test("Vedio Recording", async ({ page})=> {

    await page.goto("https://playwright.dev/docs/test-ui-mode");
    
    
});