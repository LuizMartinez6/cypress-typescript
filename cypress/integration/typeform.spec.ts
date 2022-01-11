/// <reference path="../support/index.d.ts" />
/// <reference types="cypress" />


it('logs in', () => {
    cy.visit('/')
    cy.login()
    cy.logOut()
})