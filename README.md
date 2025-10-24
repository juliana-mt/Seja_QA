# Seja_QA
Projeto de testes automatizados reais e organizados no Cypress.

-Integrantes                RA
Gabriel Flazão              1990590
João Alves                  1993855
Juliana Moreno Torres       1994729
Maria Fernanda de Andrade   1998066

OBJETIVO
Explorar a API DummyJSON (https://dummyjson.com/docs) e verificar o comportamento de seus
principais endpoints, criando uma suíte de testes automatizados em Cypress. O foco foi pensar
como um QA profissional — validando, questionando e documentando o comportamento real da
API.

ENDPOINTS TESTADOS
1 GET Produtos  -  Retorna lista, limite 5 e campos esperados.

2 GET Usuários -  Lista de usuários, busca por ID válido e inexistente.

3 POST Adicionar item -  Produto e comentário válidos/inválidos.

4 PUT/PATCH –  Atualizar Atualiza recurso e testa campo inválido.

5 DELETE –  Remover Remove recurso existente e testa inexistente

FALHAS ENCONTRADAS

1. [POST /products/add] – Aceita corpo vazio
  Passos:
    1. Enviar requisição POST para /products/add sem corpo (body vazio).
    2. Aguardar resposta do servidor.

    - Resultado esperado: Retornar status 400 com mensagem de erro informando corpo ausente ou inválido.
    - Resultado obtido: Retorna status 201 e cria produto vazio.
    - Evidência: Print da resposta no Cypress + log da requisição.

2. [POST /comments/add] – Mensagem de erro ausente
  Passos:
    1. Enviar requisição POST para /comments/add com corpo inválido (ex: campos obrigatórios vazios).
    2. Aguardar resposta do servidor.

    - Resultado esperado: Retornar status 400 com mensagem explicando o erro.
    - Resultado obtido: Retorna status 400, porém sem mensagem de erro.
    - Evidência: Print da resposta no Cypress + log.

3. [PUT /products/1] – Campo inválido não gera erro
  Passos:
    1. Enviar requisição PUT para /products/1 com um campo inexistente no body (ex: "invalido": "teste").
    2. Aguardar resposta do servidor.

    - Resultado esperado: Retornar status 400 informando campo inválido.
    - Resultado obtido: Retorna status 200, sem validação do campo.
    - Evidência: Print da resposta no Cypress + log.

4. [DELETE /products/9999] – Falta mensagem de erro clara
  Passos:
    1. Enviar requisição DELETE para /products/9999 (produto inexistente).
    2. Aguardar resposta do servidor.
    
    - Resultado esperado: Retornar status 404 com mensagem JSON clara (“Produto não encontrado”).
    - Resultado obtido: Retorna status 404, mas sem corpo JSON (mensagem ausente).
    - Evidência: Print da resposta no Cypress + log.

CONCLUSÃO
A API DummyJSON é útil para fins de teste e aprendizado, mas apresenta comportamentos
inesperados em cenários de erro. Ela não trata corretamente validações de entrada e aceita dados
inválidos sem retorno de erro adequado. Portanto, consideramos a API parcialmente confiável —
suficiente para exercícios de QA, mas não adequada para uso em produção rea