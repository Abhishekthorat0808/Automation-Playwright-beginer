import { test, expect } from "@playwright/test";






test.beforeAll("Before all", async ()=>{
console.log("Before All Test");
});
test.afterAll("Before all", async ()=>{
    console.log("after All Test");
});


test.beforeEach("Before Each", async()=>{
console.log("Before Each Test");
});

test.afterEach("Before Each", async()=>{
console.log("After Each Test");
});


test.describe("Grouping 2", async () => {  //.only or skip

  test("test 1", async ({page})=>{

    console.log("Test 1 ");
  });



    test("test 2", async ({page})=>{

    console.log("Test 2 ");
  });
});




test.describe("Grouping 1", async () => {

  test("test 3", async ({page})=>{

    console.log("Test 3 ");
  });

    test("test 4", async ({page})=>{

    console.log("Test 4 ");
  });
});