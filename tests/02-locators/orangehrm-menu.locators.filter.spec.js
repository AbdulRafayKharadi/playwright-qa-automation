//@ts-check
const { test, expect} = require('playwright/test')
test('Validate MENU items by using FILTER Locator' , async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button' , {name: 'Login'}).click();
    // filter by text
    await page.getByRole('listitem').filter({hasText: 'Leave'}).click();
    // filter by child/decendant
    await page
    .getByRole('listitem')
    .filter({has: page.getByRole('link', {name: 'Dashboard'})})
    .click();
    await page.waitForTimeout(10000);
})