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
    console.log (await page.locator('.card-body b').first().textContent());
    const itemTitles = await page.locator('.card-body b').allTextContents();
    console.log(itemTitles);
    await page.locator('.card-body b').first().click();
    console.log (await page.title());

});



    // await page.locator('input[name="username"]').fill('Admin');
    // await page.locator('input[name="password"]').fill('admin123');
    // await page.locator('button[type="submit"]').click();
    // await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/dashboard');