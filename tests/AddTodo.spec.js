const webdriver = require('selenium-webdriver')
const assert = require('assert')
// const gridHost = 'hub.lambdatest.com/wd/hub'
require('dotenv').config()
const {By} = webdriver;

describe('Add todo Lists', function () {
    browser.ignoreSynchronization = true
    it('Add todo Lists', async (done)  =>  {
        await browser.get('http://localhost:8888/')
        try {
            // try {
            //     await browser.findElement(By.css('.w-20')).click()
            // } catch (err) {
            //     console.log('desktop')
            // }

            await browser.findElement(By.css('.px-4')).click()
            await browser.findElement(By.css('.px-4')).sendKeys('Coffee time')
            await browser.findElement(By.css('.bg-indigo-500 > span')).click()
            await browser
                .findElement(By.css('.tag:nth-child(2) > span'))
                .click()
            await browser.findElement(By.css('.add')).click()

            await browser.sleep(1000)

            // try {
            //     await browser.findElement(By.css('.w-20')).click()
            // } catch (err) {
            //     console.log('desktop')
            // }

            const addedItem = await browser.findElement(
                By.css('span.ml-2.font-medium.w-full.truncate')
            )

            assert.strictEqual(await addedItem.getText(), 'Coffee time')
            browser.executeScript('lambda-status=passed')
            done()
        } catch (err) {
            browser.executeScript('lambda-status=failed')
            done.fail(err)
        }
    })

})
