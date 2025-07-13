import { Before, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CheckOutAddressPage from "../pages/CheckOutAddressPage";
import CheckOutPaymentPage from "../pages/CheckOutPaymentPage";
import CheckOutSuccessPage from "../pages/CheckOutSuccessPage";

const checkOutAddressPage = new CheckOutAddressPage();
const checkOutPaymentPage = new CheckOutPaymentPage();
const checkOutSuccessPage = new CheckOutSuccessPage();

let userData;
let paymentData;

Before(() => {
  cy.fixture("user_information").then((data) => {
    userData = data;
  });
});

Before(() => {
  cy.fixture("payment_information").then((data) => {
    paymentData = data;
  });
});

Then('App should display "CheckOut Address" Page', () => {
  checkOutAddressPage.verifyCurrentURLContainsCheckOutAndAddress();
});

When('Enter First Name', () => {
  checkOutAddressPage.enterFirstName(userData.firstName);
});

When('Enter Email Address', () => {
  checkOutAddressPage.enterEmail(userData.email);
});

When('Enter Phone Number', () => {
  checkOutAddressPage.enterPhone(userData.phoneNumber);
});

When('Enter Street Address', () => {
  checkOutAddressPage.enterStreetAddress(userData.streetAddress);
});

When('Enter City', () => {
  checkOutAddressPage.enterCity(userData.city);
});

When('Enter State', () => {
  checkOutAddressPage.enterState(userData.state);
});

When('Enter Zip Code', () => {
  checkOutAddressPage.enterZipCode(userData.zipCode);
});

When('Enter Country', () => {
  checkOutAddressPage.enterCountry(userData.country);
});

When('Click on "Continue to Payment" Button', () => {
  checkOutAddressPage.clickOnContinueToPaymentButton();
});

Then('App should display "CheckOut Payment" Page', () => {
  checkOutPaymentPage.verifyCurrentURLContainsCheckOutPayment();
});

When('Enter CardHolder', () => {
  checkOutPaymentPage.enterCardHolder(paymentData.cardHolder);
});

When('Enter Card Number', () => {
  checkOutPaymentPage.enterCardNumber(paymentData.cardNumber);
});

When('Enter Expiry Date', () => {
  checkOutPaymentPage.enterExpiryDate(paymentData.expiryDate);
});

When('Enter CVV', () => {
  checkOutPaymentPage.enterCVV(paymentData.cvv);
});

When('Click on "Place Order" Button', () => {
  checkOutPaymentPage.clickOnPlaceOrderButton();
});

Then('App should display "Success" Page', () => {
  checkOutSuccessPage.verifyURLContainsSuccess();
});

Then('App should display "Thank You for Your Purchase!" message', () => {
    checkOutSuccessPage.getGeneratedOrderNumber();
  checkOutSuccessPage.verifyThankYouMessageDisplaying();
});

When('Click on "View Orders" Button', () => {
  checkOutSuccessPage.clickOnViewOrdersButton();
});

//When Click on "View Orders" Button
