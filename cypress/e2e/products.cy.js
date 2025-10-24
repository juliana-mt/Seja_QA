describe('Teste: GET - Produtos', () => {

    it('Deve retornar a lista de produtos', () => {
        cy.request('GET', 'https://dummyjson.com/products')
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.products).to.be.an('array')
            })
    })

    it('Deve retornar apenas 5 produtos', () => {
        cy.request('GET', 'https://dummyjson.com/products?limit=5')
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.products.length).to.eq(5)
            })
    })

    it('Cada produto tem os campos esperados', () => {
        cy.request('GET', 'https://dummyjson.com/products')
            .then((response) => {
                const produto = response.body.products[0]
                expect(produto).to.have.property('id')
                expect(produto).to.have.property('title')
                expect(produto).to.have.property('description')
                expect(produto).to.have.property('price')
                expect(produto).to.have.property('discountPercentage')
                expect(produto).to.have.property('rating')
                expect(produto).to.have.property('stock')
                expect(produto).to.have.property('brand')
                expect(produto).to.have.property('category')
                expect(produto).to.have.property('thumbnail')
                expect(produto).to.have.property('images')
            })
    })

})
