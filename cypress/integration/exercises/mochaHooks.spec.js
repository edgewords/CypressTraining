describe('mochaHooks', function () {

    beforeEach(function () {
        cy.visit('https://www.edgewordstraining.co.uk/webdriver2/');
        cy.contains('Login To Restricted Area').click();
        cy.get('#username').type('edgewords');
        cy.get('#password').type('edgewords123');
        cy.contains('Submit').click();
        cy.wait (1000);
    });
    
    it('Successful Login', function () {
        cy.get('#right-column').contains('h1','Add A Record To the Database').should('exist');
        cy.contains('Log Out').click();
    });
});