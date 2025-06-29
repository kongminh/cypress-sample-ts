describe('Login via API and access homepage', () => {
  beforeEach(() => {
    cy.loginByApi();
  });

  it('should show homepage with logged-in user', () => {
    cy.visit('https://demo.realworld.io/#/');
    cy.contains('testuser').should('exist');
  });
});
