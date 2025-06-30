import { HomePage } from '../../pages/HomePage';

describe('Test Case 10: Verify Subscription in Home Page', () => {
  const homePage = new HomePage();

  it('should subscribe successfully from home page', () => {
    homePage.visit();
    homePage.scrollToSubscriptionSection();
    homePage.verifySubscriptionSectionVisible();

    const email = `test${Date.now()}@example.com`; // random email tránh bị trùng
    homePage.enterEmailAndSubscribe(email);
    homePage.verifySuccessMessage();
  });
});
