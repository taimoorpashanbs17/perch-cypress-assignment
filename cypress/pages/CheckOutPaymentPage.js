class CheckOutPaymentPage {
    cardHolderField = '#cardHolder';
    cardNumberField = '#cardNumber';
    expiryDateField = '#expiryDate';
    cvvField = '#cvv';
    placeOrderButton = '[data-testid="complete-payment"]'

    verifyCurrentURLContainsCheckOutPayment() {
        cy.verifyUrlContains("/checkout/payment");
    }

    enterCardHolder(cardHolder) {
        cy.typeText(this.cardHolderField, cardHolder);
    }

    enterCardNumber(cardNumber) {
        cy.typeText(this.cardNumberField, cardNumber);
    }

    enterExpiryDate(expiryDate) {
        cy.typeText(this.expiryDateField, expiryDate);
    }

    enterCVV(cvv) {
        cy.typeText(this.cvvField, cvv);
    }

    clickOnPlaceOrderButton(){
        cy.clickElement(this.placeOrderButton);
    }
}

export default CheckOutPaymentPage;
