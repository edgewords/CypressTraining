// Example of data-driving a test from fixtures data
// Use Node's 'require' method to load the test data as we create the loop outside of the test context:
const loginData = require('../../fixtures/userArray');

describe('data-driven', function () {

    loginData.forEach((user) => {
        it('Login using user ' + user.username, function () {
            cy.login(user.username, user.password);
            cy.get('#right-column').contains('h1','Add A Record To the Database').should('exist');
            cy.contains('Log Out').click();
            });
        }
    );
});