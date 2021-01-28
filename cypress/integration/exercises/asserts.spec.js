describe('asserts', function () {
    it('check a dynamic value for the correct fromat', function () {
        cy.visit('https://www.edgewordstraining.co.uk/webdriver2/docs/dynamicContent.html');
        //Use of a RegExp to match a value
        cy.get('#right-column div:nth-child(3) span').invoke('text').should('match',/^dynid\d{7}/);
        //or:
        cy.get('#right-column div:nth-child(3) span').contains(/^dynid\d{7}/).should('exist');
        
    });

});