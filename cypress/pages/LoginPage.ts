export class LoginPage {
  visit() {
    cy.visit('/login');
  }

  fillEmail(email: string) {
    cy.get('input[data-qa="login-email"]').type(email);
  }

  fillPassword(password: string) {
    cy.get('input[data-qa="login-password"]').type(password);
  }

  submit() {
    cy.get('button[data-qa="login-button"]').click();
  }
}
