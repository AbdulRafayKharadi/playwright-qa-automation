//@ts-check
const {test, expect}= require ('@playwright/test')
test('Validate Login elements by using Placeholder and Role Locators' , async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button' , { name: 'Login'}).click();
    await page.waitForTimeout(10000);
})