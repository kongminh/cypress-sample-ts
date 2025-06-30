import { ProductPage } from '../../pages/ProductPage';
import { CartPage } from '../../pages/CartPage';

describe('Cart Test', () => {
  const productPage = new ProductPage();
  const cartPage = new CartPage();
  let user: { email: string; password: string };

  beforeEach(() => {
    cy.fixture('user.json').then((data) => {
      user = data;
      cy.loginViaUi(user.email, user.password);
    });
  });

  it('should add product to cart', () => {
    productPage.visit();
    productPage.addFirstProductToCart();
    productPage.viewCart();
    cy.contains('Shopping Cart').should('exist');
  });

  it('should add two products to the cart and verify them', () => {
    productPage.visit();

    // Add first product
    productPage.addProductToCartByIndex(0);
    productPage.clickContinueShopping();

    // Add second product
    productPage.addProductToCartByIndex(1);
    productPage.clickViewCart();

    // Verify products in cart
    cartPage.verifyCartHasProducts(2);
  });
});
