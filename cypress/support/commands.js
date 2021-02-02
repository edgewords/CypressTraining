// Custom Commnds

// This import imports the cypress-audit plugin commands
// Used for perfoamnce testing see, integration/performance/readme-cypress-audit.txt
import "cypress-audit/commands";

Cypress.Commands.add("login", function(username, password) {
    cy.visit('https://www.edgewordstraining.co.uk/webdriver2/');
    cy.contains('Login To Restricted Area').click();
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.contains('Submit').click();
    cy.wait (1000);
    });
