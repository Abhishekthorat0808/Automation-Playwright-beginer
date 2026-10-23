import{test, expect} from "@playwright/test";


test('Tagging@sanity', async ({page})=> {
 console.log("Belongs to @sanity1")
});

test('Tagging2@sanity', async ({page})=> {
 console.log("Belongs to @sanity2")
});


test('TaggingSmoke@smoke', async ({page})=> {
 console.log("Belongs to @smoke1")
});

test('Taggingsmoke2@smoke', async ({page})=> {
 console.log("Belongs to @Smoke2")
});

test('Taggingreg@reg', async ({page})=> {
 console.log("Belongs to @reg1")
});

test('Taggingreg2@smoke@reg@sanity', async ({page})=> {
 console.log("Belongs to @smoke @reg @sanity")
});