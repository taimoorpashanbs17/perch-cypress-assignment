class CheckOutSuccessPage{
    thankYouMessage = 'h1';
    viewOrdersButton = '[data-testid="view-orders"]'
    generatedOrderNumber = '[data-testid="order-number"]';

    verifyURLContainsSuccess(){
        cy.verifyUrlContains("/checkout/success");
    }

    verifyThankYouMessageDisplaying(){
        cy.shouldDisplayTextIn(this.thankYouMessage, "Thank You for Your Purchase!");
    }

    clickOnViewOrdersButton(){
        cy.clickElement(this.viewOrdersButton);
    }

    getGeneratedOrderNumber(){
        return cy.getElementText(this.generatedOrderNumber).then((name) => {
            const orderNumber = name;
            Cypress.env('orderNumber', orderNumber);
            return cy.wrap(orderNumber);
        });
    }

}

export default CheckOutSuccessPage;