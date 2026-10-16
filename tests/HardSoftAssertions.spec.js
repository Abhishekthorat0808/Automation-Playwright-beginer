    import {test , expect} from "@playwright/test";
    test("Hard&SoftAssertions",async ({page})=>{

        await page.goto("https://www.flipkart.com/");


        await page.locator("//span[@role='button']").click();

    console.log("Checking current search box is visible");
    const searchbox=await page.getByRole('textbox', { name: 'Search for Products, Brands' })
    await expect(searchbox).toBeVisible();

    console.log("Checking Current page url");
    await expect(page).toHaveURL("https://www.flipkart.com/");



    ///Title page name change testcase is failed but remaining code is executed.
    console.log("Checking current page title");
    await expect.soft(page).toHaveTitle("Online Shopping India Mobile, Cameras, Lifestyle & more Online @ Flipkart.com///Abhishek");

    console.log("checking the count of login dropdown");
   const login = page.getByRole('link', { name: 'Login' }).first();

    await login.hover();
    await expect(await page.locator("//ul[@class='p9yS7v M8Sosa _1psv1ze3c _1psv1ze5l _1psv1ze7c _1psv1ze9l _1cisqlf2']//a")).toHaveCount(12);








    });