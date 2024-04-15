const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "2eaw87",
  e2e: {
    baseurul:"http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
