class ProductDetailsPage {
    productNameHeader = 'h1';
    productPrice = '[data-testid="product-price"]'
    productDescription = 'div[data-testid="product-description"] > p';
    quantityDropDown = '#quantity'
    addToCartButton = '[data-testid="add-to-cart"]'


    getProductName() {
        return cy.getElementText(this.productNameHeader);
    }

    verifyCurrentURLContainsProduct() {
        cy.verifyUrlContains("/product")
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
        this.getProductPrice().then((text) => {
            expect(text).to.be.equal(productPrice)
        });
    }

    getProductDescription(){
        return cy.getElementText(this.productDescription);
    }

    verifyProductDescription(description){
        this.getProductDescription().then((text) => {
            expect(text).to.be.equal(description)
        });
    }

    selectQuantity(){
        cy.selectRandomDropdownValue(this.quantityDropDown, "productQuantity");
    }

    clickOnAddToCartButton(){
        cy.clickElement(this.addToCartButton);
    }



}

export default ProductDetailsPage;