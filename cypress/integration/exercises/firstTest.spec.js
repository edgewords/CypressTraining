describe('firstTest', function () {
    it('check website sanity', function () {
        cy.visit('https://www.edgewordstraining.co.uk/webdriver2');
        cy.title().should('equal', 'Automated Tools Test Site');
        cy.contains('Access Basic Examples Area').click();
        cy.get('#right-column').contains('h1','Automated Tools Test Site').should('exist');
        cy.contains('Basic HTML').click();
        cy.get('#right-column').contains('h1','Basic HTML').should('exist');
        cy.contains('Forms').click();
        cy.get('#right-column').contains('h1','Forms').should('exist');
    });
});