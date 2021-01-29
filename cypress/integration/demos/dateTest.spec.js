//import our function lib - ES6 format
import { getDate } from '../../support/functionLib';

describe('dates', function () {
    it('should give us the current date', function () {
        cy.log(getDate());
    });
});