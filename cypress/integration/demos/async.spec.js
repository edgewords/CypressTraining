//The following shows the async nature of JavaScript when
// not using cy commands. Here just a standard JS console.log
// run the test & open the console quickly (F12)
// You will see the console.log has performed BEFORE the cy actions!

describe('async - sync', function () {
    it('async demo', function () {
        cy.visit('https://www.edgewordstraining.co.uk/webdriver2');
        cy.title().should('equal', 'Automated Tools Test Site');
        cy.contains('Access Basic Examples Area').click();
        cy.get('#right-column').contains('h1','Automated Tools Test Site').should('exist');
        cy.contains('Basic HTML').click();
        console.log('hello from the console!');
        cy.get('#right-column').contains('h1','Basic HTML').should('exist');
        cy.contains('Forms').click();
        cy.get('#right-column').contains('h1','Forms').should('exist');
    });

    it('sync demo', function () {
        cy.visit('https://www.edgewordstraining.co.uk/webdriver2');
        cy.title().should('equal', 'Automated Tools Test Site');
        cy.contains('Access Basic Examples Area').click();
        cy.get('#right-column').contains('h1','Automated Tools Test Site').should('exist');
        // Using .then, we force it into the chain of cy commands and make it synchronous
        cy.contains('Basic HTML').click().then(()=>{
            console.log('hello from the console!');
        })
        cy.get('#right-column').contains('h1','Basic HTML').should('exist');
        cy.contains('Forms').click();
        cy.get('#right-column').contains('h1','Forms').should('exist');
    });

});