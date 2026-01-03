//@ts-check
const{test, expect} = require('playwright/test')
test('Validate Login elements by using Placeholder locator' , async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button' , { name: "Login"}).click();
    await page.getByAltText('profile picture').click();
    await page.waitForTimeout(10000);
})