
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
