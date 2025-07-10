import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProductDetailsPage from "../pages/ProductDetailsPage";


const productDetailsPage = new ProductDetailsPage();



Then ('App should navigate to the "Product Details" page of that product', () =>{
    productDetailsPage.verifyCurrentURLContainsProduct()
});

Then ('Verify the "Name" of the product', () =>{
    const productName = Cypress.env('randomProductName');
    productDetailsPage.verifyProductName(productName);
});

Then ('Verify the "Price" of the product', () =>{
    const productName = Cypress.env('randomProductPrice');
    productDetailsPage.verifyProductPrice(productName);
});


Then ('Verify the "Description" of the product', () =>{
    const productDescription = Cypress.env('randomProductDescription');
    productDetailsPage.verifyProductDescription(productDescription);
});

When ('User selects a quantity from the "Quantity" dropdown', () =>{
    productDetailsPage.selectQuantity();
});

When ('Click on the "Add to Cart" button', () =>{
    productDetailsPage.clickOnAddToCartButton();
});


