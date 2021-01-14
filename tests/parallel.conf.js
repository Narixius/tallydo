require('dotenv').config()
exports.config = {
    specs: ['./AddTodo.spec.js'],

    seleniumAddress:
        'https://' +
        process.env.LT_USERNAME +
        ':' +
        process.env.LT_ACCESS_KEY +
        '@hub.lambdatest.com/wd/hub',

    commonCapabilities: {
        build: 'protractor-selenium-sample',
        name: 'parallel-local-test',
        tunnel: true,
    },

    multiCapabilities: [
        {
            browserName: 'Chrome',
            version: 'latest',
            platform: 'Windows 10',
        },
        {
            browserName: 'Safari',
            version: '10.0',
            platform: 'macOS Sierra',
        },
        {
            browserName: 'Firefox',
            version: 'latest',
            platform: 'Windows 10',
        },
        {
            browserName: 'Internet explorer',
            version: 'latest',
            platform: 'Windows 10',
        },
        {
            platformName: 'Android',
            browserName: 'Chrome',
            deviceName: 'Galaxy S9',
            platformVersion: '10',
        },
        {
            platformName: 'iOS',
            browserName: 'Safari',
            deviceName: 'iPhone 12',
            platformVersion: '14.2',
        },
    ],

    onPrepare: () => {
        myReporter = {
            specStarted: function (result) {
                specStr = result.id
                spec_id = parseInt(specStr[specStr.length - 1])
                browser.getProcessedConfig().then(function (config) {
                    var fullName = config.specs[spec_id]
                    browser.executeScript(
                        'lambda-name=' + fullName.split(/(\\|\/)/g).pop()
                    )
                })
            },
            specDone: function (result) {
                browser.executeScript('lambda-status=' + result.status)
            },
        }
        jasmine.getEnv().addReporter(myReporter)
    },
    onComplete: () => {
        browser.quit()
    },
}

// Code to support common capabilities
exports.config.multiCapabilities.forEach(function (caps) {
    for (var i in exports.config.commonCapabilities)
        caps[i] = caps[i] || exports.config.commonCapabilities[i]
})
