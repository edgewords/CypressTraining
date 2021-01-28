// Custom Commnds
Cypress.Commands.add("login", function(username, password) {
    cy.visit('https://www.edgewordstraining.co.uk/webdriver2/');
    cy.contains('Login To Restricted Area').click();
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.contains('Submit').click();
    cy.wait (1000);
    })
