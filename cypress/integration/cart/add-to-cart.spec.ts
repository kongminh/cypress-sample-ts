import { ProductPage } from '../../pages/ProductPage';

describe('Cart Test', () => {
  const productPage = new ProductPage();

  beforeEach(() => {
    cy.loginViaUi('testuser@example.com', 'testpassword');
  });

  it('should add product to cart', () => {
    productPage.visit();
    productPage.addFirstProductToCart();
    productPage.viewCart();
    cy.contains('Shopping Cart').should('exist');
  });
});
