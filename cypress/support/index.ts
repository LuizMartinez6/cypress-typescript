import './commands'



const COOKIE_NAME = "OptanonAlertBoxClosed";
const today = new Date

Cypress.on("window:before:load", window => {
  window.document.cookie = `${COOKIE_NAME}=${today.toISOString()}`;
});


