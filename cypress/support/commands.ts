/// <reference types="cypress" />

  
Cypress.Commands.add('login', () => {
    cy.visit('/')
    cy.get('[data-qa="field-email"]').clear()
        .type(Cypress.env('userEmail'))
    cy.get('[data-qa="field-password"]')
        .clear()
        .type(Cypress.env('userPassword'), {log: false})
    cy.get('[data-qa="button-submit"]')
        .click()
    cy.url()
        .should('contain', '/workspaces/')
    cy.get('.react-gravatar')
        .should('be.visible')
})

Cypress.Commands.add('logOut', () => {
    cy.get('.react-gravatar')
        .should('be.visible')
        .click()
    cy.contains('a', 'Log out')
        .should('be.visible')
        .click()
    cy.url()
        .should('be.equal', `${Cypress.config('baseUrl')}/login`)
    cy.contains('input[type="submit"]', 'Log in to Typeform')
        .should('be.visible')
})
