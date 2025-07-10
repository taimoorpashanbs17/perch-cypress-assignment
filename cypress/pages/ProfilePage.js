class ProfilePage{
    yourProfileHeader = 'h1'
    personalInformationHeader = 'div.profile-card > h2';
    backToHomeButton = '[data-testid="back-to-home"]'
    editProfileButton = '[data-testid="edit-profile"]'
    nameField = '#name';
    emailField = '#email';
    saveChangesButton = '[data-testid="save-profile"]'
    nameText = '[data-testid="profile-name"]'
    emailText = '[data-testid="profile-email"]'

    verifyCurrentURLContainsProfile(){
        cy.verifyUrlContains("profile")
    }

    verifyYourProfileHeaderIsDisplaying(){
        cy.shouldDisplayTextIn(this.yourProfileHeader, "Your Profile");
    }

    verifyPersonalHeaderIsDisplaying(){
        cy.shouldDisplayTextIn(this.personalInformationHeader, "Personal Information");
    }

    clickOnBackToHomeButton(){
        cy.clickElement(this.backToHomeButton);
    }

    clickOnEditProfileButton(){
        cy.clickElement(this.editProfileButton);
    }

    verifyNameFieldShouldEnabled(){
        cy.shouldBeEnabled(this.nameField);
    }

    verifyEmailShouldEnabled(){
        cy.shouldBeEnabled(this.emailField);
    }

    enterName(name){
        cy.typeText(this.nameField, name);
    }

    enterEmail(email){
        cy.typeText(this.emailField, email);
    }

    clickOnSaveChangesButton(){
        cy.clickElement(this.saveChangesButton);
    }

    verifyNameTextUpdated(name){
        cy.getElementText(this.nameText).then((text) => {
            expect(text).to.be.equal(name)
        })
    }

        verifyEmailTextUpdated(email){
        cy.getElementText(this.emailText).then((text) => {
            expect(text).to.be.equal(email)
        })
    }

}

export default ProfilePage;