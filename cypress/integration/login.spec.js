/// <reference types="cypress" />

/*
1. o que está sendo testado? Twitter Clone, Login
2. sob que circunstância, condições? Ao autenticar com credenciais válidas
3. qual o resultado esperado? Deve ser autenticado direcionado para o feed

Ao autenticar com credenciais inválidas, deve visualizar uma mensagem de erro/ ou permanecer na tela de login
*/

//HOOKS -> MOCHA
// -> antes de cada ou todos os testes -> beforeEach / before
// -> depois de cada ou todos os testes -> afterEach / after

beforeEach(() => {
    //cy.intercept
    // 1. RouteMatcher - mapeamento, filtro da rota que a gente quer
    // 2. RouteHandler (opcional) - controlar o que a rota vai retornar (mock)

    //Request URL: https://res.cloudinary.com/douy56nkf/image/upload/v1588127894/twitter-build/bvxmlgckusmrwyivsnzr.svg
    //Request Method: GET

    cy.intercept({
        method: 'GET',
        hostname: 'res.cloudinary.com'
    }, {
        statusCode: 200,
        fixture: 'img.png'
    }).as('cloudinary')
});



describe('Twitter Clone - Login', () => {
    //Open Cypress | Set ".only"| Add only
    it('Ao autenticar com credenciais válidas, deve ser direcionado para o feed', () => {
        cy.login()

        cy.visit('/');

        cy.get('nav ul li')
            .should('be.visible')
            .and('have.length', 6)

    });
});