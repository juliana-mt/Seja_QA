describe('Teste: DELETE - Remover recurso', () => {
    it('Deletar recurso existente', () => {
        cy.request('DELETE', 'https://dummyjson.com/products/1')
            .then((response) => {
                expect(response.status).to.eq(200);
            });
    });

    it('Tentar deletar recurso inexistente', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://dummyjson.com/products/9999',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
        });
    });
});
