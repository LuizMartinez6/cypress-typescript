/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Logs in using the UI
       * @example
       * cy.login()
       */
      login(): Chainable<any>,
      /**
       * Logs out using the UI
       * @example
       * cy.logOut()
       */
       logOut(): Chainable<any>
    }

    
}


