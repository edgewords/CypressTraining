// API Server is a locally installed API server, opensource from:
// https://github.com/edgewords/EdgeAPIserver/releases
// The following creates a new product, captures the new product id
// then the following test deletes the new product

describe('POST Methods', function () {
    let prod_id;

    it('Create a new product', function () {
        cy.request('POST','http://localhost:2002/api/products', {
                "name": "PC",
                "price": 250
            }).then((respose)=> {
                prod_id = respose.body.id;
                cy.log('Created new product id: ' + prod_id);   
                })
    });

    it('Delete the New Product Created in Last Test', function () {
        cy.request('DELETE','http://localhost:2002/api/products/'+prod_id).then((response)=>{
            expect(response.status).equal(200);
            });
        });
});