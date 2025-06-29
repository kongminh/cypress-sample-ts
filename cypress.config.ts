const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.automationexercise.com',
    supportFile: 'cypress/support/index.ts',
    specPattern: 'cypress/integration/**/*.spec.ts',
    video: true,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    setupNodeEvents: function (on, config) {
      // placeholder for plugin setup
    }
  }
});
