import test, {page, expect} from '@playwright/test';
test('Assertions Demo', async ({page})=>{

    await page.goto('https://kitchen.applitools.com/');
    //await page.pause();

    //1. Title Assertion - Check if element is present or not
        // if the element is present or not
        await expect(page).toHaveTitle('The Kitchen');

    //2. text assertions
        await page.locator('text=The Kitchen').isVisible();
        await expect(page.locator('text=The Kitchen')).toHaveCount(1);  
    
        if (await page.$('text=The Kitchen')){
            console.log("Element is present");
        }

        //if the element is visible or not
        await expect(page.locator('text=The Kitchen')).toBeVisible();
        //soft assertion will not fail the test immediately
        //await expect.soft(page.locator('text=The Kitchen')).toBeHidden(); 

        //If the element is enabled or disabled
        await expect(page.locator('text=The Kitchen')).toBeEnabled();
        //await expect(page.locator('text=The Kitchen')).toBeDisabled();

        //validate the text
        await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen');
        await expect(page.locator('text=The Kitchen')).toContainText('Kitchen');
        await expect(page.locator('text=The Kitchen')).not.toHaveText('The Kitchens');

        //validate the attribute        
        await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', /.*css-dpmy2a/);
        await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/);

    //3. URL Assertion
    await expect(page).toHaveURL(/kitchen.applitools.com/);        

    //4. screenshot assertion
    await page.pause();
    await expect(page.locator('text=The Kitchen')).toHaveScreenshot();
});