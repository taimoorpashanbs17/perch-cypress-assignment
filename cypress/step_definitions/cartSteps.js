import {When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CartPage from "../pages/CartPage";

const cartPage = new CartPage();

Then ('Verify user navigates to "Cart" Page', () =>{
    cartPage.verifyCurrentURLContainsCart();
});

Then ('Verify the correct product has been added to the cart', () =>{
    const productName = Cypress.env('randomProductName');
    cartPage.verifyProductName(productName);
});

Then ('Verify the correct price is displayed', () =>{
    const productPrice = Cypress.env('randomProductPrice');
    cartPage.verifyProductPrice(productPrice);
});


Then ('Verify the correct subtotal is calculated', () =>{
    const getProductPrice = Cypress.env('randomProductPrice');
    const getProductQuantity = Cypress.env('productQuantity');
    const productPrice = parseFloat(getProductPrice.replace(/[^0-9.]/g, ''));
    const productQuantity = parseInt(getProductQuantity);
    const expectedSubTotalPrice = productPrice * productQuantity;
    const formattedPrice = `$${expectedSubTotalPrice.toFixed(2)}`;
    cartPage.verifySubTotalPrice(formattedPrice);

});

When ('Click on "Remove" button', () =>{
    cartPage.clickOnRemoveButton();
});

Then ('Item in Cart should not be displaying', () =>{
    cartPage.productShouldNotBeDisplaying();
});

Then ('Message "Your cart is empty" should be displaying', () =>{
    cartPage.verifyEmptyCartDisplaying();
});

When ('Click on "Proceed to CheckOut" Button', () =>{
    cartPage.clickOnProceedToCheckOutButton();
});
