// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
    cy.visit('/ui/login')
    cy.get('#input-1').type(email)
    cy.get('#input-3').type(password)
    cy.contains('span', 'Entrar').click()

    cy.get('#input-9').check()
    cy.get('.v-btn__content .text-wrap').click()
    cy.get('#codigo').type(Cypress.env('codigo_correto'))
    cy.contains('span', 'Fazer login').click({force:true})
    cy.url().should('contain', '/ui/home')
})