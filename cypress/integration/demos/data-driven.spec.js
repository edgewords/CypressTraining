
// Use Node's 'require' method to load the test data:
const loginData = require('../../fixtures/userArray');

describe('data-driven', function () {

    loginData.forEach((user) => {
        it('Login using mulitple user data', function () {
            cy.login(user.username, user.password);
            cy.get('#right-column').contains('h1','Add A Record To the Database').should('exist');
            cy.contains('Log Out').click();
            });
        }
    );
});