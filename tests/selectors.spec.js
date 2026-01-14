import {test, expect} from '@playwright/test';
test('Selectors Demo', async ({page})=>{

await page.goto('https://www.saucedemo.com/');



//using any object property
await page.click('id=user-name');

await page.locator('id=user-name').fill('Edison');
await page.locator('[id=user-name]').fill('Einstein');

//using css selector
await page.locator('#login-button').click();

//using xpath selector
await page.locator('xpath=//input[@name="password"]').fill('Faraday');
await page.locator('//input[@name="password"]').fill('Saturday');


await page.pause();
//using text selector
await page.locator('text=Login').click();
await page.locator('input:has-text("Login")').click();

});