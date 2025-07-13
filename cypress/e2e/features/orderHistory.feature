Feature: Order History
        Scenario: Add one product, make successful checkout and verify that order at 'Order History'.
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
             When Click on "Proceed to CheckOut" Button
             Then App should display "CheckOut Address" Page
             When Enter First Name
              And Enter Email Address
              And Enter Phone Number
              And Enter Street Address
              And Enter City
              And Enter State
              And Enter Zip Code
              And Enter Country
              And Click on "Continue to Payment" Button
             Then App should display "CheckOut Payment" Page
             When Enter CardHolder
              And Enter Card Number
              And Enter Expiry Date
              And Enter CVV
              And Click on "Place Order" Button
             Then App should display "Success" Page
              And App should display "Thank You for Your Purchase!" message
             When Click on "View Orders" Button
             Then URL should contain "profile"
              And Check that Number of Order should be 1
              And Verify Order Number is exactly same as generated
 