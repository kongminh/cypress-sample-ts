import { ProductPage } from '../../pages/ProductPage';

describe('Test Case 8: Verify All Products and product detail page', () => {
  const productPage = new ProductPage();

  it('should show all products and navigate to product detail page', () => {
    productPage.visit();
    cy.contains('All Products').should('be.visible');
    productPage.verifyAllProductsVisible();

    productPage.clickFirstViewProduct();
    productPage.verifyProductDetailPage();
  });
});
