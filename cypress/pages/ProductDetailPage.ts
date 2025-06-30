export class ProductDetailPage {
visit(productId: number) {
cy.visit(/product_details/${productId});
}

setQuantity(qty: number) {
cy.get('input[name="quantity"]').clear().type(${qty});
}

addToCart() {
cy.get('button.cart').click();
}

clickViewCart() {
cy.contains('View Cart').click();
}
}