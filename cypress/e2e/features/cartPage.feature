Feature: Cart Page

        Scenario: Add one product and verify that product is displaying on "cart"
            Given Navigate to Home Page
             When User gets random product from "Home" Page
              And User types that product name on "Search" field
             Then App should display search results containing Product name
             When User clicks on the "View Details" button
             Then App should navigate to the "Product Details" page of that product
              And Verify the "Name" of the product
              And Verify the "Description" of the product
              And Verify the "Price" of the product
             When User selects a quantity from the "Quantity" dropdown
              And Click on the "Add to Cart" button
             Then Verify user navigates to "Cart" Page
              And Verify the correct product has been added to the cart
              And Verify the correct price is displayed
              And Verify the correct subtotal is calculated
        
        Scenario: Add one product, remove it and verify that product is removed from cart
            Given Navigate to Home Page
             When User gets random product from "Home" Page
              And User types that product name on "Search" field
             Then App should display search results containing Product name
             When User clicks on the "View Details" button
             Then App should navigate to the "Product Details" page of that product
              And Verify the "Name" of the product
              And Verify the "Description" of the product
              And Verify the "Price" of the product
             When User selects a quantity from the "Quantity" dropdown
              And Click on the "Add to Cart" button
             Then Verify user navigates to "Cart" Page
             When Click on "Remove" button
             Then Item in Cart should not be displaying
              And Message "Your cart is empty" should be displaying