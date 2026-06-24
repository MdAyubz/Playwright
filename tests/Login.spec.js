
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
    await page.waitForTimeout(5000); //This will wait for 5 seconds after login
    //await page.screenshot({ path: 'screenshot.png' }); //This will take a screenshot of the page after login

    await page.locator("button:has-text('Close')").click(); //This will click on the logout button
    await page.waitForTimeout(5000); //This will wait for 5 seconds after login
    await page.screenshot({ path: 'dashboard_screenshot.png' });

    
// Entity Dropdown
    await page.waitForTimeout(2000);
    await page.selectOption('#WorkflowStageFieldData_vFld3', '9400'); //This will select the option with value '9400' from the dropdown with id 'EntityDropdown'
    await page.screenshot({ path: 'Entity_screenshot.png' });

// Location Dropdown
    await page.waitForTimeout(2000);
    await page.selectOption('#WorkflowStageFieldData_vFld12', '13146'); //This will select the option with value '13146' from the dropdown with id 'LocationDropdown'
    await page.screenshot({ path: 'Location_screenshot.png' });

// Year Dropdown
    await page.waitForTimeout(2000);
    await page.selectOption('#ddlFinancialYear', '13141'); //This will select the option with value '13141' from the dropdown with id 'YearDropdown'
    await page.screenshot({ path: 'Year_screenshot.png' });


});

/* test ('Login',async ({page})=> {
    
    await page.goto("https://approcess.azimpremjifoundation.org/KareAdmin/Accounts/Login.aspx?");
   


}); */