import { SignupPage } from '../../pages/SignupPage';

describe('Sign Up Test', () => {
  const signupPage = new SignupPage();

  it('should sign up a new user successfully', () => {
    cy.fixture('user.json').then((user) => {
      signupPage.visit();
      signupPage.fillInitialForm(user.name, user.email);
      signupPage.fillDetails(user);
      cy.contains('Account Created!').should('be.visible');
    });
  });
});
