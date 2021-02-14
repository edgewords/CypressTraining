//example fo data-driving an API test to create
//multiple products from /fixtures/products.json
describe('Data-Driven POST Method', function () {

    it('Create new products', function () {
        // load our products test data array from json
        cy.fixture('products').then((productData) => {
            productData.forEach(product => {
                cy.request('POST', 'http://localhost:2002/api/products', {
                    "name": product.name,
                    "price": product.price
                    }).then((response) => {
                        cy.log('Created new product id: ' + response.body.id);
                        expect(response.status).to.equal(201);
                        expect(response.body.name).to.equal(product.name);
                    });
            });
        });
    });
});
