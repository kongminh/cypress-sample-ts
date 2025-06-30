export class HomePage {
  visit() {
    cy.visit('/');
  }

  scrollToSubscriptionSection() {
    cy.get('footer').scrollIntoView();
  }

  verifySubscriptionSectionVisible() {
    cy.contains('Subscription', { matchCase: false }).should('be.visible');
  }

  enterEmailAndSubscribe(email: string) {
    cy.get('#susbscribe_email').type(email);
    cy.get('#subscribe').click();
  }

  verifySuccessMessage() {
    cy.get('.alert-success')
      .should('be.visible')
      .and('contain.text', 'You have been successfully subscribed!');
  }
}
