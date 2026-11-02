import { test, expect } from "@playwright/test";


let userid;


test("Get User", async ({ request }) => {
    let response = await request.get("https://reqres.in/api/users?page=2");
    await expect.soft(response.status()).toBe(200);
    console.log(await response.json());

});

test("Create Post User", async ({ request }) => {
    let create = await request.post("https://reqres.in/api/users", {
        data: {
            "name": "pavan",
            "job": "trainer"
        },
        headers: { "Accrpt": "application/json" }
    });

    let ResponseBody = await create.json();
    await expect(create.status()).toBe(201);
    userid = ResponseBody.id;
    console.log(ResponseBody);

});

test("Update Put User", async ({ request }) => {
    let create = await request.put("https://reqres.in/api/users/"+userid, {
        data: {
            "name": "pavan",
            "job": "engineer"
        },
        headers: { "Accrpt": "application/json" }
    });

    let ResponseBody = await create.json();
    await expect(create.status()).toBe(200);
    userid = ResponseBody.id;
    console.log(ResponseBody);
});

test("Delete User", async ({ request }) => {

    let deleteuser = await request.delete("https://reqres.in/api/users/"+userid);
    expect(deleteuser.status()).toBe(204); //nocontent
}); 