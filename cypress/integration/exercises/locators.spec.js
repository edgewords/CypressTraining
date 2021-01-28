describe('Locators', function () {
    it('form completion', function () {
        cy.visit('https://www.edgewordstraining.co.uk/webdriver2/docs/forms.html');
        //complete the form
        cy.get('#textInput').clear();
        cy.get('#textInput').type('John');
        cy.get('#textArea').clear();
        cy.get('#textArea').type('Smith');
        cy.get('#checkbox').check();
        cy.get('#select').select('Selection Two');
        cy.get('#two').check();
        cy.contains('Submit').click();
        //check form values were passed through
        cy.get('#textInputValue').should('have.text','John');
        //or:
        cy.get('#textInputValue').contains('John').should('exist');
    });
});