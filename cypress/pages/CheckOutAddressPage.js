class CheckOutAddressPage {
    firstNameField = '#firstName';
    emailField = '#email';
    phoneField = '#phone';
    streetAddressField = '#street';
    cityField = '#city';
    stateField = '#state';
    zipCodeField = '#zipCode';
    countryField = '#country';
    continueToPaymentButton = '[data-testid="continue-to-payment"]'

    verifyCurrentURLContainsCheckOutAndAddress() {
        cy.verifyUrlContains("/checkout/address");
    }

    enterFirstName(firstName) {
        cy.typeText(this.firstNameField, firstName);
    }

    enterEmail(email) {
        cy.typeText(this.emailField, email);
    }

    enterPhone(phone) {
        cy.typeText(this.phoneField, phone);
    }

    enterStreetAddress(streetAddress) {
        cy.typeText(this.streetAddressField, streetAddress);
    }

    enterCity(city) {
        cy.typeText(this.cityField, city);
    }

    enterState(state) {
        cy.typeText(this.stateField, state);
    }

    enterZipCode(zipCode) {
        cy.typeText(this.zipCodeField, zipCode);
    }

    enterCountry(country) {
        cy.typeText(this.countryField, country);
    }

    clickOnContinueToPaymentButton(){
        cy.clickElement(this.continueToPaymentButton);
    }
}

export default CheckOutAddressPage;
