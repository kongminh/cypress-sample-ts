import { ProductPage } from '../../pages/ProductPage';

describe('Test Case 9: Search Product', () => {
  const productPage = new ProductPage();
  const searchKeyword = 'dress';

  it('should search and display relevant products', () => {
    productPage.visit();
    cy.contains('All Products').should('be.visible');

    productPage.searchForProduct(searchKeyword);

    cy.contains('Searched Products').should('be.visible');
    productPage.verifySearchResultsContain(searchKeyword);
  });
});
