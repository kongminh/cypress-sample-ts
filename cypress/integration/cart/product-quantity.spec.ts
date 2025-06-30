import { ProductDetailPage } from '../../pages/ProductDetailPage';
import { CartPage } from '../../pages/CartPage';

describe('Test Case 13: Verify Product Quantity in Cart', () => {
const productDetailPage = new ProductDetailPage();
const cartPage = new CartPage();

it('should add product with quantity 4 and verify in cart', () => {
const productId = 1;
const quantity = 4;
productDetailPage.visit(productId);
productDetailPage.setQuantity(quantity);
productDetailPage.addToCart();
productDetailPage.clickViewCart();

cartPage.verifyProductQuantityIs(quantity);
});
});