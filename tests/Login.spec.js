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


});



    // await page.locator('input[name="username"]').fill('Admin');
    // await page.locator('input[name="password"]').fill('admin123');
    // await page.locator('button[type="submit"]').click();
    // await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/dashboard');