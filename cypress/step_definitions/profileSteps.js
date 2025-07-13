import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProfilePage from "../pages/ProfilePage";

const profilePage = new ProfilePage();
const name = "Testing User";
const email = "testing_user_0909@test.com";


When('URL should contain "profile"', () => {
  profilePage.verifyCurrentURLContainsProfile();
});

Then('Your Profile header should be visible', () => {
  profilePage.verifyYourProfileHeaderIsDisplaying();
});

Then('"Personal Information" header should be visible', () => {
  profilePage.verifyPersonalHeaderIsDisplaying();
});

When('Click on "Back to Home" Button', () => {
  profilePage.clickOnBackToHomeButton();
});

When('Click on "Edit Profile" button', () => {
  profilePage.clickOnEditProfileButton();
});

Then('"Name" input field should be enabled', () => {
  profilePage.verifyNameFieldShouldEnabled();
});

Then('"Email" input field should be enabled', () => {
  profilePage.verifyEmailShouldEnabled();
});

When('Enter name in "Name" field', () => {
  profilePage.enterName(name);
});

When('Enter email in "Email" field', () => {
  profilePage.enterEmail(email);
});

When('Click on "Save Changes" button', () => {
  profilePage.clickOnSaveChangesButton();
});

Then('New updated name should be displaying on "Name" field', () => {
  profilePage.verifyNameTextUpdated(name);
});

Then('New updated email should be displaying on "Email" field', () => {
  profilePage.verifyEmailTextUpdated(email);
});

Then('Check that Number of Order should be 1', () => {
  profilePage.verifyNumberOfOrders(1);
});

Then('Verify Order Number is exactly same as generated', () => {
  const orderNumber = Cypress.env('orderNumber').replace('#', '');;
  profilePage.verifyOrderNumber(orderNumber);
});



//Verify Order Number is exactly same as generated