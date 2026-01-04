//@ts-check
const {test , expect} = require('playwright/test')
test ('Validate Login and Logout elements by using XPATH locator' , async ({page}) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('xpath=//input[@placeholder="Username"]').fill('Admin');
    await page.locator('xpath=//input[@name="password"]').fill('admin123');
    await page.locator('xpath=//button[normalize-space()="Login"]').click();
    await page.locator('xpath=//img[@alt="profile picture"]').click();
    // await page.locator('xpath=//img[@class="oxd-userdropdown-img"]').click(); (another way to locate the same element)
    await page.waitForTimeout(1000);
    // Role-based attribute 
    await page.locator('//a[@role="menuitem" and text()="Logout"]').click(); //better way of locating element
    // await page.locator('xpath=//a[normalize-space()="Logout"]').click(); (another way to locate the same element)
    await page.waitForTimeout(10000);
})