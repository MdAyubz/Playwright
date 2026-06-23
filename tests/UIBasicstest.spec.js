const {test} = require('@playwright/test');

/*
//Syntax for the test cases. One test block is one testcase
test ('First Playwright prgm',async function() //If we are using await the we need to mention 'async' in the function or else await will not work
// Function witout any name can be written as "()=>"
{
//step:1
await;  //Since JS is async it doesn't wait for previous step to be completed unless we explicity mention it
//step:2
await //Hence at the begining of each step we need to mention await explicity
//step:3
    
});

*/

test ('Browser based TC',async ({browser})=> //browser is a fixture which comes by default and it needs to be inside {} if we want it to know it is playwright browser 
{
    const context = await browser.newContext(); //this will create and open a new instance of webbrowser with no cookies or predifined cookies.
    const page= await context.newPage(); //this will open a new page in the browser
    await page.goto("https://www.google.com/webhp?zx=1782210508990");
});

test.only ('Page based TC',async ({page})=> //Opens the browser and new webpage without any tokens or cookies.
//Use of test.only will run only this test case and ignore all the remaning test cases
{
    
    await page.goto("https://doodles.google/");
});