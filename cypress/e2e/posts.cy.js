describe('Teste: POST – Adicionar item', () => {

    it('POST com dados válidos - Produto', () => {
        cy.request('POST', 'https://dummyjson.com/products/add', {
            title: 'Produto Teste',
            price: 50
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.title).to.eq('Produto Teste');
            expect(response.body.price).to.eq(50);
        });
    });

    it('POST com dados inválidos - Produto', () => {
        cy.request('POST', 'https://dummyjson.com/products/add', {
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('id');
        });
    });

    it('POST com dados válidos - Comentário', () => {
        cy.request('POST', 'https://dummyjson.com/comments/add', {
            body: 'Comentário de teste',
            postId: 1,
            userId: 1
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.body).to.eq('Comentário de teste');
            expect(response.body.postId).to.eq(1);
        });
    });

    it('POST com dados inválidos - Comentário', () => {
        cy.request({
            method: 'POST',
            url: 'https://dummyjson.com/comments/add',
            body: {},
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('message', 'Invalid comment body');
        });
    });

});
