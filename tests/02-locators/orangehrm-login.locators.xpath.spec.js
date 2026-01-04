/* Using XPATH unnessesarily is not recommanded. The best practice to use the default getBy Locators as much as you can for clean and better understanding.
70-80% of the time the elements can be located through getBy Locator.
Given below are the best approaches to locate the element using // comments under each XPATH code */

//@ts-check
const {test , expect} = require('playwright/test')
test ('Validate Login and Logout elements by using XPATH locator' , async ({page}) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('xpath=//input[@placeholder="Username"]').fill('Admin');
    // await page.getByPlaceholder('Username').fill('Admin'); (This is the BEST option to locate the above element)
    await page.locator('xpath=//input[@name="password"]').fill('admin123');
    // await page.getByPlaceholder('Password').fill('admin123'); (*BEST APPROACH)
    await page.locator('xpath=//button[normalize-space()="Login"]').click();
    // await page.getByRole('button' , {name: 'Login'}).click(); (*BEST APPROACH)
    await page.locator('xpath=//img[@alt="profile picture"]').click();
    // await page.locator('xpath=//img[@class="oxd-userdropdown-img"]').click(); (another way to locate the same above element)
    // await page.getByAltText('profile picture').click(); (*BEST APPROACH)
    await page.waitForTimeout(1000);
    // Role-based attribute 
    await page.locator('xpath=//a[@role="menuitem" and text()="Logout"]').click(); //better way of locating element if using XPATH
    // await page.locator('xpath=//a[normalize-space()="Logout"]').click(); (another way to locate the same above element)
    // await page.getByRole('menuitem', { name: 'Logout' }).click(); (*BEST APPROACH)
    await page.waitForTimeout(10000);
})