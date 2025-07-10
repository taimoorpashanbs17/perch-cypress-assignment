import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pages/HomePage";

const homePage = new HomePage();

Given('Navigate to Home Page', ()=>{
    cy.visit("/")
})

When('Click on "Sort By" button', () => {
  homePage.clickOnSortButton();
});


Then ('App should display all products in ascending order', () =>{
    homePage.getAllProductPrices();
    homePage.assertPricesSorted();
});

When('User gets random product from "Home" Page', () => {
    homePage.getRandomProductName();
});

When('User types that product name on "Search" field', () => {
    const productName = Cypress.env('randomProductName');
    homePage.enterProductNameOnSearchField(productName);
});

When('User types that Invalid product name on "Search" field', () => {
    homePage.enterProductNameOnSearchField("Testing Product");
});

Then ('App should display search results containing Product name', () =>{
    const productName = Cypress.env('randomProductName');
    homePage.verifyNumberOfProductsDisplaying(1);
    homePage.verifySearchedProductName(productName);
});


Then ('App should display a message "No products found"', () =>{
    homePage.verifyNoProductsFoundMessageDisplaying();
    homePage.verifyTextForNoProductFoundAlertMessage();
});

When('Click on "Profile" Button', () => {
    homePage.clickOnProfileButton();
});

Then ('User should be navigated to Home Page', () =>{
   homePage.verifyCurrentURLContainsProfile()
});


When ('User clicks on the "View Details" button', () =>{
   homePage.getSearchedProductPrice();
   homePage.getSearchedProductDescription();
   homePage.clickOnViewDetailsButton();
});

