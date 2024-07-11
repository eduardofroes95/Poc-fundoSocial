const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://fundosocial.dev.sicredipioneira.com.br",
    viewportWidth: 1980,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    testIsolation:false,
    "env": {
      "HTTP_PROXY": "",
      "HTTPS_PROXY": "",
      "NO_PROXY": ""
    }
  },
});
