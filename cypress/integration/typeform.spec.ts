/// <reference path="../support/index.d.ts" />
/// <reference types="cypress" />

describe('Typeform', () => {

    
    it('Logs in by UI', () => {
        cy.visit('/')
        cy.login()
    })
    
    it('Logs out by UI', () => {
        cy.login()        
        cy.logOut()
    })
})