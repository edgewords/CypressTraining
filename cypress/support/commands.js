// Custom Commnds

// This import imports the cypress-audit plugin commands
// Used for perfoamnce testing see, integration/performance/readme-cypress-audit.txt
import "cypress-audit/commands";

//Example of our own custom command with some custom logging
Cypress.Commands.add("login", function(username, password) {
    //override the default logging with our own log object
    //Use 'Segoe UI Emoji' font for the padlock icon!
    const log = Cypress.log({
        name: "login",
        displayName: "LOGIN",
        message: [`🔐 Authenticating user: ${username}`]
      });

    cy.visit('https://www.edgewordstraining.co.uk/webdriver2/');
    cy.contains('Login To Restricted Area').click();
    log.snapshot("before"); //Take a DOM snapshot. This is the before, we can also specify the after
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.contains('Submit').click();
    cy.wait (1000, {log: false}); // example of telling cypress not to log this command
    log.snapshot("before"); //Take another DOM snapshot, the 'after' snapshot
    });
