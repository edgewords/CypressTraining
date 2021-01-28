describe('sync', function () {
    it('check image appears', function () {
        cy.visit('https://www.edgewordstraining.co.uk/webdriver2/docs/dynamicContent.html');
        cy.get('#delay').clear();
        cy.get('#delay').type('3');
        cy.get('a[onclick="javascript\:loadAjax\(\)\;return false\;"]').click();
        //check the apple image
        cy.get('div#image-holder > img').should('be.visible');
        //longer delay test
        cy.contains('Clear Content').click();
        cy.get('#delay').clear();
        cy.get('#delay').type('8');
        cy.get('a[onclick="javascript\:loadAjax\(\)\;return false\;"]').click();
        //check the apple image
        cy.get('div#image-holder > img', {timeout:20000}).should('be.visible');
    });
});