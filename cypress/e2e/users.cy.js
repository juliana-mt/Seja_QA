describe('Teste: GET - Usuários', () => {

    it('Deve retornar a lista de usuários', () => {
        cy.request('GET', 'https://dummyjson.com/users')
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.users).to.be.an('array')
            })
    })

    it('Deve retornar um único usuário', () => {
        cy.request('GET', 'https://dummyjson.com/users/1')
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.id).to.eq(1)
                expect(response.body).to.have.property('firstName')
                expect(response.body).to.have.property('email')
            })
    })

    it('Deve retornar erro ao buscar por ID inexistente', () => {
        cy.request({
            method: 'GET',
            url: 'https://dummyjson.com/users/9999',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404)
        })
    })

})
