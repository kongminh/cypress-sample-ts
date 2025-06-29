export class SignupPage {
  visit() {
    cy.visit('/login');
  }

  fillInitialForm(name: string, email: string) {
    cy.get('input[data-qa="signup-name"]').type(name);
    cy.get('input[data-qa="signup-email"]').type(email);
    cy.get('button[data-qa="signup-button"]').click();
  }

  fillDetails(user: any) {
    cy.get('#id_gender1').check();
    cy.get('#password').type(user.password);
    cy.get('#days').select('1');
    cy.get('#months').select('January');
    cy.get('#years').select('1990');
    cy.get('#first_name').type(user.firstName);
    cy.get('#last_name').type(user.lastName);
    cy.get('#address1').type(user.address);
    cy.get('#state').type(user.state);
    cy.get('#city').type(user.city);
    cy.get('#zipcode').type(user.zipcode);
    cy.get('#mobile_number').type(user.mobile);
    cy.get('button[data-qa="create-account"]').click();
  }
}
