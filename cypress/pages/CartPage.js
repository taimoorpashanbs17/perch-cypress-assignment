class CartPage {

    productName = 'h2';
    productPrice = '.item-price';
    quantityDropDown = '.quantity-select';
    subTotal = '[data-testid="subtotal"]'
    removeButton = '.remove-item'
    cartEmptyText = '[data-testid="empty-cart"] > p'

    verifyCurrentURLContainsCart() {
        cy.verifyUrlContains("/cart")
    }

    getProductName() {
        return cy.getElementText(this.productName);
    }

    verifyProductName(productName) {
        this.getProductName().then((text) => {
            expect(text).to.be.equal(productName)
        });
    }

    getProductPrice() {
        return cy.getElementText(this.productPrice);
    }

    verifyProductPrice(productPrice) {
        this.getProductPrice().then((price) => {
            expect(price).to.be.equal(productPrice);
        });
    }

    getSubTotalPrice(){
        return cy.getElementText(this.subTotal);
    }

    verifySubTotalPrice(expectedPrice){
        this.getSubTotalPrice().then((price) => {
            expect(price).to.be.equal(expectedPrice);
        })
    }

    clickOnRemoveButton(){
        cy.clickElement(this.removeButton);
    }

    productShouldNotBeDisplaying(){
        cy.shouldNotBeDisplaying(this.productName);
        cy.shouldNotBeDisplaying(this.productPrice);
    }

    verifyEmptyCartDisplaying(){
        cy.shouldDisplayTextIn(this.cartEmptyText, "Your cart is empty");
    }

}

export default CartPage;
