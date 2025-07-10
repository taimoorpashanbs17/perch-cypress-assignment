Feature: Home Page
        Scenario: Click on Sort By Button and Verify Products displays prices in ascending order.
            Given Navigate to Home Page
             When Click on "Sort By" button
             Then App should display all products in ascending order
     
        Scenario: Search with Product present on Home Page and verify it displays the result
            Given Navigate to Home Page
             When User gets random product from "Home" Page
              And User types that product name on "Search" field
             Then App should display search results containing Product name
        
        Scenario: Search with Product which is not displaying on Home Page and verify that alert message displays
            Given Navigate to Home Page
             When User types that Invalid product name on "Search" field
             Then App should display a message "No products found"

