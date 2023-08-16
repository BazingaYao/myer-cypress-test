import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import SignupPage from "./signupPage"

// Scenario: User try to signup with blank email
Given("user is on the signup page", () => {
  SignupPage.visit()
})

When('find the join button and click', () => {
  SignupPage.clickJoinButton()
});

Then("should see the email error message", () => {
  SignupPage.emailError()
})


//Unsuccessful Signup with invalid email 
When("find the email address input and type with {string}", (email) => {
  SignupPage.enterEmailAddress(email)
})

And("find the join button and click", () => {
  SignupPage.clickJoinButton()
});


Then("should see the email error message", () => {
  SignupPage.emailError()
})


Then("should see the other information fields", () => {
  SignupPage.shouldSeeInformationFields();
});


// Scenario Outline: Unsuccessful signup due to invalid fields 
When ("fill in the form with {string}, {string}, {string}, {string}, {string}, {string}", (password, firstName, lastName, mobileNumber, DOB, address) => {
  SignupPage.enterPassword(password)
  SignupPage.enterFirstName(firstName)
  SignupPage.enterLastName(lastName)
  SignupPage.enterMobileNumber(mobileNumber)
  SignupPage.enterDOB(DOB)
  SignupPage.enterAddress(address)
});

And('find the create account button and click', () => {
  cy.get('#create-account').should('exist').click();
});

Then("should see the {string} error message {string}", (field, errorMessage) => {
  const errorSelectors = {
    password: '#password-error-text',
    firstName: '#first-name-error-text',
    lastName: '#last-name-error-text',
    mobileNumber: '#mobile-phone-error-text',
    DOB: '#date-of-birth-error-text',
    address: '#address-error-text'
  };

  cy.get(errorSelectors[field]).should('be.visible').contains(errorMessage);
})


// Scenario Outline: Successful Signup
Then('the user should be transferred to the Hello page', () => {
  cy.url().should('include', '/account')
});


// Scenario Outline: User try to singup with an existing account
Then('should see existing account error', () => {
  cy.get('[data-automation="notification-strip-title"]').should('exist').contains('You already have an account. ')
});