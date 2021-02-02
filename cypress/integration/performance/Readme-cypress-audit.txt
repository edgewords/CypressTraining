These tests use the cypress-audit plugin: https://github.com/mfrachet/cypress-audit
cypress-audit uses Google Lighthouse to run performance & accessibility tests on your site

Setup:
1. Install the dependency:
$ npm install --save-dev cypress-audit

2. In the cypress/plugins/index.js file, make sure to have the below. This ensures that the lighthouse calls do not open a new browser but run inthe one that cypress has opened:

const { lighthouse, pa11y, prepareAudit } = require("cypress-audit");

module.exports = (on, config) => {
  on("before:browser:launch", (browser = {}, launchOptions) => {
    prepareAudit(launchOptions);
  });

  on("task", {
    lighthouse: lighthouse(), // calling the function is important
    pa11y: pa11y(), // calling the function is important
  });
};

3. When adding the following line in the cypress/support/commands.js file, you will be able to use cy.lighthouse and cy.pa11y inside your Cypress tests:

import "cypress-audit/commands";

4. After completing the Preparation section, you can use the cy.lighthouse and cy.pa11y commands:

it("should pass the audits", function () {
  cy.lighthouse();
  cy.pa11y();
});

NOTES: This will only work with Chrome, and I found I needed to run in headless mode for some reason, so use:
npx cypress run --browser chrome --headless --spec cypress\integration\performance\*.spec.js 

Options to configure custom thresholds can be found here:
https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/config/default-config.js
