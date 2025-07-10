class HomePage {
    sortButton = '.sort-button';
    productPrices = 'p.product-price';
    productNames = 'h2.product-name';
    searchField = '[data-testid="product-search"]';
    noProductsFoundAlertMessage = '[data-testid="no-results"]';
    profileButton = '[data-testid="nav-to-profile"]';
    productDescription = 'p.product-description';
    viewDetailsButton = 'button.view-details-button'

    clickOnSortButton() {
        cy.clickElement(this.sortButton);
    }

    getAllProductPrices() {
        return cy.getAllElementTexts(this.productPrices).then((prices) => {
            cy.log('Prices: ' + JSON.stringify(prices));
            console.log('Prices:', prices);
        });

    }
    assertPricesSorted(order = 'asc') {
        return cy.getAllElementTexts(this.productPrices).then((texts) => {
            const prices = texts.map(t => parseFloat(t.replace(/[^0-9.]/g, '')));
            const sorted = [...prices].sort((a, b) => order === 'asc' ? a - b : b - a);
            expect(prices).to.deep.equal(sorted);
        });

    }

    getRandomProductName() {
        return cy.getAllElementTexts(this.productNames).then((names) => {
            const randomName = names[Math.floor(Math.random() * names.length)];
            cy.log('Random Product: ' + randomName);
            Cypress.env('randomProductName', randomName);
            return cy.wrap(randomName);
        });
    }

    enterProductNameOnSearchField(productName) {
        cy.typeText(this.searchField, productName);
    }

    verifyNumberOfProductsDisplaying(numberOfProducts) {
        cy.getElementCount(this.productNames).then((count) => {
            expect(count).to.be.equal(numberOfProducts);
        });

    }

    verifySearchedProductName(productName) {
        cy.shouldDisplayTextIn(this.productNames, productName);
    }

    verifyNoProductsFoundMessageDisplaying() {
        cy.shouldBeVisible(this.noProductsFoundAlertMessage);
    }

    verifyTextForNoProductFoundAlertMessage() {
        cy.shouldDisplayTextIn(this.noProductsFoundAlertMessage, "No products found matching your search.");
    }

    clickOnProfileButton() {
        cy.clickElement(this.profileButton);
    }

    verifyCurrentURLContainsProfile() {
        cy.verifyUrlContains("/")
    }

    getSearchedProductPrice(){
        return cy.getAllElementTexts(this.productPrices).then((prices) => {
            const randomProductPrice = prices[Math.floor(Math.random() * prices.length)];
            cy.log('Random Product Price: ' + randomProductPrice);
            Cypress.env('randomProductPrice', randomProductPrice);
            return cy.wrap(randomProductPrice);
        });
    }

    getSearchedProductDescription(){
        return cy.getAllElementTexts(this.productDescription).then((description) => {
            const randomProductDescription = description[Math.floor(Math.random() * description.length)];
            cy.log('Random Product Description: ' + randomProductDescription);
            Cypress.env('randomProductDescription', randomProductDescription);
            return cy.wrap(randomProductDescription);
        });
    }

    clickOnViewDetailsButton(){
        cy.clickElement(this.viewDetailsButton);
    }

}

export default HomePage;
