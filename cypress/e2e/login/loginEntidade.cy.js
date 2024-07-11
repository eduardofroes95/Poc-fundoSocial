beforeEach(() => {

  cy.clearAllCookies()
  cy.clearAllLocalStorage()
  cy.clearAllSessionStorage()

});

describe('Esta suíte possui o objetivo de validar os cenários negativos do login para Entidades', () => {

  it('Validando o login passando um CNPJ inválido', () => {

    cy.visit("/ui/login")
    cy.get('#input-1').type(Cypress.env("cnpj_invalido"))
    cy.get('#input-3').type(Cypress.env("conta_correta"))
    cy.contains('span', 'Entrar').click()

    cy.get('#input-1-messages').should('be.visible').and('have.text', 'Credenciais inválidas')
    cy.get('#input-3-messages').should('be.visible').and('have.text', 'Credenciais inválidas')
  });

  it('Validando o login passando uma conta inválida', () => {

    cy.visit("/ui/login")
    cy.get('#input-1').type(Cypress.env("cnpj_correto"))
    cy.get('#input-3').type(Cypress.env("conta_invalida"))
    cy.contains('span', 'Entrar').click()

    cy.get('#input-1-messages').should('be.visible').and('have.text', 'Credenciais inválidas')
    cy.get('#input-3-messages').should('be.visible').and('have.text', 'Credenciais inválidas')
  });

  it('Validando o login passando um código inválido', () => {

    cy.visit("/ui/login")
    cy.get('#input-1').type(Cypress.env("cnpj_correto"))
    cy.get('#input-3').type(Cypress.env("conta_correta"))
    cy.contains('span', 'Entrar').click()

    cy.get('#input-9').check()
    cy.get('.v-btn__content .text-wrap').click()
    cy.get('#codigo').type(Cypress.env('codigo_invalido'))
    cy.get('.v-btn__content .text-wrap').click()
    cy.get('#codigo-messages').should('have.text', 'Credenciais inválidas')
  });

});

describe('Esta suíte possui o objetivo de validar o cenário positivo do login para Entidades', () => {

  it('Validando o login passando CNPJ, conta e código corretos', () => {

    cy.visit("/ui/login")
    cy.get('#input-1').type(Cypress.env("cnpj_correto"))
    cy.get('#input-3').type(Cypress.env("conta_correta"))
    cy.contains('span', 'Entrar').click()

    cy.get('#input-9').check()
    cy.get('.v-btn__content .text-wrap').click()
    cy.get('#codigo').type(Cypress.env('codigo_correto'))
    cy.contains('span', 'Fazer login').click({force:true})
  });
});