export class ProductPage {
  visit() {
    cy.visit('/products');
  }

  addFirstProductToCart() {
    cy.get('.single-products').first().trigger('mouseover');
    cy.contains('Add to cart').first().click();
  }

  viewCart() {
    cy.contains('View Cart').click();
  }

  verifyAllProductsVisible() {
    cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 0);
  }

  clickFirstViewProduct() {
    cy.contains('View Product').first().click();
  }

  verifyProductDetailPage() {
    cy.url().should('include', '/product_details/');
    cy.get('.product-information').within(() => {
      cy.get('h2').should('exist'); // Product name
      cy.contains('Category').should('exist');
      cy.contains('Availability').should('exist');
      cy.contains('Condition').should('exist');
      cy.contains('Brand').should('exist');
    });
  }

  searchForProduct(keyword: string) {
    cy.get('#search_product').type(keyword);
    cy.get('#submit_search').click();
  }

  verifySearchResultsContain(keyword: string) {
    cy.get('.features_items .product-image-wrapper').should('exist');
    cy.get('.features_items .productinfo p').each(($el) => {
      expect($el.text().toLowerCase()).to.include(keyword.toLowerCase());
    });
  }

  addProductToCartByIndex(index: number) {
    cy.get('.single-products').eq(index).invoke('show');
    cy.get('.single-products').eq(index).within(() => {
      cy.contains('Add to cart').click();
    });
  }

  clickContinueShopping() {
    cy.contains('Continue Shopping').click();
  }

  clickViewCart() {
    cy.contains('View Cart').click();
  }
}
