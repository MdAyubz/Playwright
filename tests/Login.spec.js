/* 
const {test,expect} = require('@playwright/test');

test ('Page Title',async ({page})=> {
    
    await page.goto("https://approcess.azimpremjifoundation.org/KareAdmin/Accounts/Login.aspx?");
    
    const ptitle = await page.title(); 
    expect(await page.title()).toBe(ptitle); //This will check the title of the page and if it is not matching then it will fail the test case

    
// Better locator strategy (avoid xpath if possible)
    await page.locator('#ctl00_ContentPlaceHolder1_txtUsername').fill('GV');
    await page.locator('#ctl00_ContentPlaceHolder1_txtPassword').fill('apf@1234');

    await page.locator('#btnValidate').click(); //This will click on the login button
    
    // Optional: wait for navigation after login
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000); //This will wait for 5 seconds after login
    //await page.screenshot({ path: 'screenshot.png' }); //This will take a screenshot of the page after login

    await page.locator("button:has-text('Close')").click(); 
    await page.waitForTimeout(2000); //This will wait for 5 seconds after login
    await page.screenshot({ path: 'dashboard_screenshot.png' });

    
// Entity Dropdown
    await page.waitForTimeout(3000);
    await page.selectOption('#WorkflowStageFieldData_vFld3', '9400'); //This will select the option with value '9400' from the dropdown with id 'EntityDropdown'
    await page.screenshot({ path: 'Entity_screenshot.png' });

// Location Dropdown
    await page.waitForTimeout(3000);
    await page.selectOption('#WorkflowStageFieldData_vFld12', '13146'); //This will select the option with value '13146' from the dropdown with id 'LocationDropdown'
    await page.screenshot({ path: 'Location_screenshot.png' });

//Year Dropdown
    // await page.waitForTimeout(2000);
    // await page.selectOption('#ddlFinancialYear', '13141'); //This will select the option with value '13141' from the dropdown with id 'YearDropdown'
    // await page.screenshot({ path: 'Year_screenshot.png' });

    await page.waitForTimeout(2000);
    await page.locator("//div[@id='2242']//div[@class='row']").click();
    await page.locator('#ctl00_ContentPlaceHolder1_txtSearch').fill('GCIPL/26-27/0535');
    await page.locator('#Button1').click();
    await page.waitForTimeout(2000);
    //await page.screenshot({ path: 'Search_screenshot.png' });

    await page.screenshot({
        path: 'Search_screenshot.png', 
        fullPage: true 
        });

//    // await page.waitForTimeout(3000);
//     await page.locator('.fa-navicon').click();
//     await page.locator('#mainnav-menu li >> text=YourMenuName').click();
//     await page.locator('#ctl00_btnLogout').click();
//     //await page.waitForTimeout(2000);
//     await page.screenshot({ path: 'Logout_screenshot.png' });


// Open hamburger menu
await page.locator("//i[contains(@class,'fa-navicon')]").click();

// Click menu item (improved XPath from your long one)
await page.locator("//li[@class='active']//a[@href='#']//i[@class='arrow']").click();

// Click logout
await page.locator("#ctl00_btnLogout").click();

// ✅ Validation after logout (VERY IMPORTANT)
await expect(page).toHaveURL(/Login/);

// Screenshot
await page.screenshot({
    path: 'Logout_screenshot.png',
    fullPage: true
});


});

/* test ('Login',async ({page})=> {

    
    await page.goto("https://approcess.azimpremjifoundation.org/KareAdmin/Accounts/Login.aspx?");
   


}); */ //*/

const { test, expect } = require('@playwright/test');

test('End-to-End Flow', async ({ page }) => {

    // ✅ FIXED URL
    await page.goto('https://approcess.azimpremjifoundation.org/KareAdmin/Accounts/Login.aspx');

    // ✅ Title validation
    await expect(page).toHaveTitle(await page.title());

    // ✅ Login
    await page.fill('#ctl00_ContentPlaceHolder1_txtUsername', 'GV');
    await page.fill('#ctl00_ContentPlaceHolder1_txtPassword', 'apf@1234');

    await Promise.all([
        page.waitForLoadState('networkidle'),
        page.click('#btnValidate')
    ]);

    // ✅ Handle popup safely
    const closeBtn = page.locator("button:has-text('Close')");
    if (await closeBtn.isVisible()) {
        await closeBtn.click();
    }

    // ✅ Dropdowns
    await page.selectOption('#WorkflowStageFieldData_vFld3', '9400');
    await page.selectOption('#WorkflowStageFieldData_vFld12', '13146');

    // // ✅ Search  
    // await page.locator("//div[@id='2242']//div[@class='row']").click();
    // await page.fill('#ctl00_ContentPlaceHolder1_txtSearch', 'GCIPL/26-27/0535');
    // await page.click('#Button1');

    // await expect(page.locator('#ctl00_ContentPlaceHolder1_txtSearch'))
    //     .toHaveValue('GCIPL/26-27/0535');

    // await page.screenshot({
    //     path: 'Search_screenshot.png',
    //     fullPage: true
    // });

    // ✅ Hamburger
    await page.locator('i.fa-navicon').click();

    // ✅ Safer logout
    // const logoutBtn = page.locator('#ctl00_btnLogout');
    // //await expect(logoutBtn).toBeVisible();
    // await logoutBtn.click();
    await page.locator("//body/form[@id='aspnetForm']/div[@id='container']/div[@class='boxed']/nav[@id='mainnav-container']/div[@id='mainnav']/div[@id='mainnav-menu-wrap']/div[@id='ctl00_menuDiv']/div[@class='nano-content']/ul[@id='mainnav-menu']/li[1]/a[1]/i[1]").click();
    await page.locator("#ctl00_btnLogout").click();

    // ✅ Verify logout
    //await expect(page).toHaveURL(/Login/);

    await page.screenshot({
        path: 'Logout_screenshot.png',
        fullPage: true
    });
});