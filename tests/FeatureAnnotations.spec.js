import { test, expect } from "@playwright/test";

test("testSkip", async ({ page }) => {

    test.skip();
    console.log("skip test");

});



test("testfixme", async ({ page }) => {

    test.fixme();
    console.log("Fixme");

});
console.log("FixmeSkipped");


test("testfailed", async ({ page }) => {

    test.fail();
    console.log("Fail test");

});



test("testSlow", async ({ page }) => {

    test.slow();
    console.log("Fail test");
    //make time 3 time slower 

});

