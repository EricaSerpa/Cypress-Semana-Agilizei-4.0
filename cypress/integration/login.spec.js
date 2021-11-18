/// <reference types="cypress" />

/*
1. o que está sendo testado? Twitter Clone, Login
2. sob que circunstância, condições? Ao autenticar com credenciais válidas
3. qual o resultado esperado? Deve ser autenticado direcionado para o feed

Ao autenticar com credenciais inválidas, deve visualizar uma mensagem de erro/ ou permanecer na tela de login
*/

describe('Twitter Clone - Login', () => {
    //Open Cypress | Set ".only"| Add only
    it('Ao autenticar com credenciais válidas, deve ser direcionado para o feed', () => {

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
            fixture:'img.png'

        }).as('cloudinary')

        cy.visit('http://twitter-clone-example.herokuapp.com');

        cy.get('input[type=email]').type('joana@dark.com')
        cy.get('input[type=password]').type('123456')
        cy.get('button[type=submit]').click()

        cy.get('nav ul li')
        .should('be.visible')
        .and('have.length', 6)

    });
});