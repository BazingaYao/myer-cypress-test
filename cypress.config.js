const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/*.feature",
  },
  screenshotsFolder: "cypress/screenshots",
  screenshotOnRunFailure: true,
  viewportWidth: 1280,
  viewportHeight: 720,
});
