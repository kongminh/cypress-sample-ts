import { CartPage } from '../../pages/CartPage';

describe('Test Case 11: Verify Subscription in Cart Page', () => {
const cartPage = new CartPage();

it('should display subscription section and subscribe successfully', () => {
  cartPage.visit();
  cartPage.scrollToSubscriptionSection();
  cartPage.verifySubscriptionSectionVisible();
  const email = `test_cart_${Date.now()}@example.com`; // để tránh bị trùng email
  cartPage.enterEmailAndSubscribe(email);
  cartPage.verifySuccessMessage();
});
});