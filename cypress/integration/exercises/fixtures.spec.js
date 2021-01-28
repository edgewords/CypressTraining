describe('Fixtures', function () {

    beforeEach(function () {
        cy.fixture('userData').as('loginData');
    });
    
    it('Invoke Login using Test Data', function () {
        cy.login(this.loginData.username, this.loginData.password);
        cy.get('#right-column').contains('h1','Add A Record To the Database').should('exist');
        cy.contains('Log Out').click();
    });
});