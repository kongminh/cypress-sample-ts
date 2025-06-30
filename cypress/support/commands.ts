Cypress.Commands.add('loginViaUi', (email: string, password: string) => {
  cy.visit('/login');
  cy.get('input[data-qa="login-email"]').type(email);
  cy.get('input[data-qa="login-password"]').type(password);
  cy.get('button[data-qa="login-button"]').click();
});

declare namespace Cypress {
  interface Chainable {
    loginViaUi(email: string, password: string): Chainable<void>;
  }
}
