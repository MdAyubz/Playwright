const {test, expect} = require('@playwright/test');

test('Login Test', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    const title = await page.title();
    console.log(title);
    await expect(page).toHaveTitle(title);
    console.log("Title is correct");

    await page.locator('[id="userEmail"]').fill('ayub@gmail.com');
    await page.locator('[id="userPassword"]').fill('ayub');
    await page.locator('[id="login"]').click();
    console.log(await page.locator('[id="toast-container"]').textContent());
    await page.locator('[id="toast-container"]').textContent("Incorrect");

    await page.locator('[id="userEmail"]').fill("");
    await page.locator('[id="userEmail"]').fill("ayubkhan9888@gmail.com");
    await page.locator('[id="userPassword"]').fill("");
    await page.locator('[id="userPassword"]').fill("Ay@9845563");
    await page.locator('[id="login"]').click();

    console.log(await page.title());
    await page.waitForLoadState('networkidle'); // This is wait until the network is idle and all the requests are completed. This is used to wait for the page to load completely before performing any actions on the page.
    await page.locator('.card-body b').first().waitFor(); // This is wait until the first element is visible on the page. This is used to wait for the page to load completely before performing any actions on the page.

    console.log (await page.locator('.card-body b').first().textContent());
    const itemTitles = await page.locator('.card-body b').allTextContents();
    console.log(itemTitles);
    await page.locator('.card-body b').first().click();
    console.log (await page.title());

});


// //Rahul Shetty Academy Client App Login Test
// const { test, expect } = require('@playwright/test');
 
 
// test('@Web Client App login', async ({ page }) => {
//    //js file- Login js, DashboardPage
//    const email = "anshika@gmail.com";
//    const productName = 'zara coat 3';
//    const products = page.locator(".card-body");
//    await page.goto("https://rahulshettyacademy.com/client");
//    await page.locator("#userEmail").fill(email);
//    await page.locator("#userPassword").type("Iamking@000");
//    await page.locator("[value='Login']").click();
//    await page.waitForLoadState('networkidle');
//    await page.locator(".card-body b").first().waitFor();
//    const titles = await page.locator(".card-body b").allTextContents();
//    console.log(titles); 
 
// });