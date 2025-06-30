import { HomePage } from './HomePage';
export class CartPage extends HomePage {
  visit() {
    cy.visit('/view_cart');
  }

  verifyProductExists(productName: string) {
    cy.get('.cart_description').should('contain.text', productName);
  }

  verifyCartHasProducts(count: number) {
    cy.get('.cart_description').should('have.length.at.least', count);
  }
  verifyProductQuantityIs(expectedQty: number) {
    cy.get('button.disabled').should('contain.text', expectedQty);
  }
}