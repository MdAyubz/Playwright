const {test, expect} = require('@playwright/test');

// test('Login Test', async ({page}) => {
//     await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
//     const title = await page.title();
//     console.log(title);
//     await expect(page).toHaveTitle(title);
//     console.log("Title is correct");

//     await page.locator('[id="userEmail"]').fill('ayub@gmail.com');
//     await page.locator('[id="userPassword"]').fill('ayub');
//     await page.locator('[id="login"]').click();
//     console.log(await page.locator('[id="toast-container"]').textContent());
//     await page.locator('[id="toast-container"]').textContent("Incorrect");

//     await page.locator('[id="userEmail"]').fill("");
//     await page.locator('[id="userEmail"]').fill("ayubkhan9888@gmail.com");
//     await page.locator('[id="userPassword"]').fill("");
//     await page.locator('[id="userPassword"]').fill("Ay@9845563");
//     await page.locator('[id="login"]').click();

//     console.log(await page.title());
//     await page.waitForLoadState('networkidle'); // This is wait until the network is idle and all the requests are completed. This is used to wait for the page to load completely before performing any actions on the page.
//     await page.locator('.card-body b').first().waitFor(); // This is wait until the first element is visible on the page. This is used to wait for the page to load completely before performing any actions on the page.

//     console.log (await page.locator('.card-body b').first().textContent());
//     const itemTitles = await page.locator('.card-body b').allTextContents();
//     console.log(itemTitles);
//     await page.locator('.card-body b').first().click();
//     console.log (await page.title());

// });


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


test ('Login Test 2', async ({browser}) => {

    const page = await browser.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName= await page.locator('#username');
    const passWord= await page.locator('#password');
    //const userType= await page.locator('#radiotextsty');
    const dropDown= await page.locator('select.form-control'); //This will locate the dropdown element
    await userName.fill('rahulshettyacademy');
    await passWord.fill('Learning@830$3mK2');

    await page.locator('.radiotextsty').last().click(); //This will click on the last radio button
    await expect(page.locator('.radiotextsty').last()).toBeChecked(); //This will check if the last radio button is checked or not
    await dropDown.selectOption('teach');//This will select the option with value 'teach' from the dropdown
    await page.locator('#okayBtn').click();//This will click on the okay button in the alert popup
    await page.locator('#terms').click();
    await page.locator('#signInBtn').click();
    await page.waitForLoadState('networkidle'); // This is wait until the network is idle and all the requests are completed. This is used to wait for the page to load completely before performing any actions on the page.
    console.log(await page.title());
    //await page.pause();


});

test ('Child Page Test', async ({browser}) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink= await page.locator("[href*='documents-request']");

    const [childPage]= await Promise.all([
        context.waitForEvent('page'),
        documentLink.click(),
    ])
    
    const text= await childPage.locator('.red').textContent();
    console.log(text);
    const arrayText= text.split('@');
    const domain= arrayText[1].split('.')[0];
    console.log(domain);

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName= await page.locator('#username');
    const passWord= await page.locator('#password');
    //const userType= await page.locator('#radiotextsty');
    const dropDown= await page.locator('select.form-control'); //This will locate the dropdown element
    await userName.fill(domain);
    await passWord.fill('Learning@830$3mK2');
    console.log("Username: " + await page.locator('#username').inputValue());//This will print the value of the username field in the console
    console.log("Password: " + await page.locator('#password').inputValue());//This will print the value of the password field in the console
    await page.locator('.radiotextsty').last().click(); //This will click on the last radio button
    await expect(page.locator('.radiotextsty').last()).toBeChecked(); //This will check if the last radio button is checked or not
    await dropDown.selectOption('teach');//This will select the option with value 'teach' from the dropdown
    await page.locator('#okayBtn').click();//This will click on the okay button in the alert popup
    await page.locator('#terms').click();
    await page.locator('#signInBtn').click();
    await page.waitForLoadState('networkidle'); // This is wait until the network is idle and all the requests are completed. This is used to wait for the page to load completely before performing any actions on the page.
    console.log(await page.title());


});

test('Client App Test', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    const title = await page.title();
    console.log(title);
    await expect(page).toHaveTitle(title);
    console.log("Title is correct");

    // await page.locator('[id="userEmail"]').fill('ayub@gmail.com');
    // await page.locator('[id="userPassword"]').fill('ayub');
    // await page.locator('[id="login"]').click();
    // console.log(await page.locator('[id="toast-container"]').textContent());
    // await page.locator('[id="toast-container"]').textContent("Incorrect");

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

    const porductName="ZARA COAT 3";
    const products = page.locator('.card-body');
    const productCount = await products.count();
    await page.locator('.card-body b').first().waitFor(); // This is wait until the first element is visible on the page. This is used to wait for the page to load completely before performing any actions on the page.
    console.log("Product Count: " + productCount);
    for (let i = 0; i < productCount; ++i) {
        console.log(await products.nth(i).locator('b').textContent());
        //const productTitle = await products.nth(i).locator('b').textContent();
        if ( await products.nth(i).locator('b').textContent() === porductName) {
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }
    await page.pause();


});