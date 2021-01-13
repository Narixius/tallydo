const webdriver = require('selenium-webdriver')
const assert = require('assert')
const gridHost = 'hub.lambdatest.com/wd/hub'
require('dotenv').config()
const {By} = webdriver;
async function executeTest() {
    // Setup Input capabilities
    const capabilities = {
        platform: 'Android',
        deviceName: 'Galaxy S7',
        platformVersion: '8',
        browserName: 'Chrome',
        tunnel: true,
        video: true,
        tunnelName: process.env.LT_TUNNEL_NAME,
        name: 'Test 1', // name of the test
        build: 'NodeJS build', // name of the build
    }

    // URL: https://{username}:{accessKey}@hub.lambdatest.com/wd/hub
    const gridUrl = `https://${process.env.LT_USERNAME}:${process.env.LT_ACCESS_KEY}@${gridHost}`
    console.log(gridUrl)
    const driver = new webdriver.Builder()
        .usingServer(gridUrl)
        .withCapabilities(capabilities)
        .build()

    try {
        await driver.get('http://localhost:8888/')

        try{
            await driver.findElement(By.css('.w-20')).click()
        }catch(err){
            console.log("desktop")
        }

        await driver.findElement(webdriver.By.css('.px-4')).click()
        await driver.findElement(webdriver.By.css('.px-4')).sendKeys('Coffee time')
        await driver.findElement(webdriver.By.css('.bg-indigo-500 > span')).click()
        await driver.findElement(webdriver.By.css('.tag:nth-child(2) > span')).click()
        await driver.findElement(webdriver.By.css('.add')).click();

        await driver.sleep(1000)


        try {
            await driver.findElement(By.css('.w-20')).click()
        } catch (err) {
            console.log('desktop')
        }


        const addedItem = await driver.findElement( By.css('span.ml-2.font-medium.w-full.truncate'))



        assert.strictEqual(await addedItem.getText(), 'Coffee time')

    } finally {
        await driver.quit()
    }
}
executeTest()
