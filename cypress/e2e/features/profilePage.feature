Feature: Profile Page

        Scenario: Click on 'Profile' Button and verify that user navigates to Profile Page
            Given Navigate to Home Page
             When Click on "Profile" Button
             Then URL should contain "profile"
              And Your Profile header should be visible
              And "Personal Information" header should be visible

        Scenario: Click on 'Back to Home' Button and verify that user navigates to Home Page
            Given Navigate to Home Page
             When Click on "Profile" Button
             Then URL should contain "profile"
             When Click on "Back to Home" Button
             Then User should be navigated to Home Page

        Scenario: Update user username and email and verify that changes are saved
            Given Navigate to Home Page
             When Click on "Profile" Button
             Then URL should contain "profile"
             When Click on "Edit Profile" button
             Then "Name" input field should be enabled
              And "Email" input field should be enabled
             When Enter name in "Name" field
              And Enter email in "Email" field
              And Click on "Save Changes" button
             Then New updated name should be displaying on "Name" field
              And New updated email should be displaying on "Email" field
