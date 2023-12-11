const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
const { output } = require('codeceptjs');
const { devices } = require('playwright');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './*_test.js',
  output: './output',

  helpers: {
    Playwright: {
      url: 'http://libraryinformationsystem.org',
      show: true,
      browser: 'chromium'//firefox
    },
    REST: {
      endpoint: 'https://swapi.dev/api'
    },
    JSONResponse: {},
  },
  emulate : devices["iPhone 13 Pro Max"],

  multiple: {
    "firefox": {
      browsers: ['firefox']
    },
      "chromium": {
      browsers: ['chromium']
    },
    "parallel": {
        // run all tests in each browser:
      "browsers": ['firefox', 'chromium']

    }
  }, 

  include: {
    I: "./steps_file.js",
    loginPage: "./pages/Login.js",
  },

  plugins: {
    allure: {
      enabled: true,
      outputDir: "./output/"
  }
  },
  bootstrap: null,
  mocha: {},
  name: 'Codecept'
}
