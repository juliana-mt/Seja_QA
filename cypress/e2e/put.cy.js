describe('Teste: PUT/PATCH - Atualizar', () => {
  it('Atualizar recurso existente', () => {
    cy.request('PUT', 'https://dummyjson.com/products/1', { price: 999 })
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.price).to.eq(999);
      });
  });

  it('Testar atualização com campo inválido', () => {
    cy.request('PUT', 'https://dummyjson.com/products/1', { campoInexistente: 123 })
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', 1);
      });
  });
});
