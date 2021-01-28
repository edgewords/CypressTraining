describe('Custom Commands', function () {
    it('Invoke Login', function () {
        cy.login('edgewords', 'edgewords123');
        cy.get('#right-column').contains('h1','Add A Record To the Database').should('exist');
        cy.contains('Log Out').click();
    });
});