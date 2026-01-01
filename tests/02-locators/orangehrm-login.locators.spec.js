//@ts-check
const {test, expect} = require('playwright/test')
test('Validate Login elements by using Label locator' , async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.getByLabel('Username');
    console.log(await page.getByLabel('Username'));
    await page.getByLabel('Password');
    console.log(await page.getByLabel('Password'));
    // using console.log just for visuals as the locator will not show any visauls
    await page.waitForTimeout(10000); // to see the visuals on browser
    //using this command in terminal to run this test: playwright test -g "Validate Login elements by using Label locator" --headed
})