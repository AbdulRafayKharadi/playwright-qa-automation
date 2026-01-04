/* Using CSS or XPATH unnessesarily is not recommanded. The best practice to use the default getBy Locators as much as you can for clean and better understanding.
70-80% of the time the elements can be located through getBy Locator.
Given below are the best approaches to locate the element using // comments under each CSS code 
🔑 Golden rule (memorize)
CSS selects structure.
Playwright selects behavior & text.

Never force CSS to do XPath’s job.
*/

//@ts-check
const {test , expect } = require ('playwright/test')
test('Validate Login and Logout elements by using CSS locator' , async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    // await page.getByPlaceholder('Username').fill('Admin'); (*BEST APPROACH)
    await page.locator('css=input[placeholder="Username"]').fill('Admin'); // instead of using getByPlaceholder we use CSS to locate the element 
    // await page.getByPlaceholder('Password').fill('admin123'); (*BEST APPROACH)
    await page.locator('css=input[name="password"]').fill('admin123');
    // await page.getByRole('button' , {name: 'Login'}).click(); (*BEST APPROACH)
    await page.locator('css=button[type="submit"]').click();
    // await page.getByAltText('profile picture').click(); (*BEST APPROACH)
    await page.locator('css=img[alt="profile picture"]').click();
    await page.waitForTimeout(1000);
    // await page.getByRole('menuitem', { name: 'Logout' }).click(); (*BEST APPROACH)
    await page.locator('css=a[role="menuitem"]', { hasText: 'Logout' }).click();
    await page.waitForTimeout(10000);
})