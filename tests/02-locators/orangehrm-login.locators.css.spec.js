//@ts-check
const {test , expect } = require ('playwright/test')
test('Validate Login and Logout elements by using CSS locator' , async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    // await page.getByPlaceholder('Username').fill('Admin');
    await page.locator('css=input[placeholder="Username"]').fill('Admin'); // instead of using getByPlaceholder we use xpath to locate the element 
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button' , {name: 'Login'}).click();
    await page.getByAltText('profile picture').click();
    await page.waitForTimeout(1000);
    await page.getByText('Logout').click();
    await page.waitForTimeout(10000);
})