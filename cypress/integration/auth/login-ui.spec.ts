import { LoginPage } from '../../pages/LoginPage';

describe('Login Test', () => {
  const loginPage = new LoginPage();

  let user: { email: string; password: string };

  before(() => {
    cy.fixture('user.json').then((data) => {
      user = data;
    });
  });

  it('should login with valid credentials from fixture', () => {
    loginPage.visit();
    loginPage.fillEmail(user.email);
    loginPage.fillPassword(user.password);
    loginPage.submit();
    cy.contains('Logged in as').should('exist');
  });
});
