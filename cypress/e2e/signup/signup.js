import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import SignupPage from "./signupPage"

// Scenario: User enters an invalid email address
Given("the user is on the signup page", () => {
  SignupPage.visit();
})

When("User fill email address with {string}", (email) => {
  SignupPage.enterEmailAddress(email)
})

And("clicks the {string} button", () => {
  SignupPage.clickButton()
});

Then("should see the join error message", () => {
  SignupPage.JoinError()
})

// Scenario: User enters a valid email address
Then("should see the other information fields", () => {
  SignupPage.shouldSeeInformationFields();
});

// Scenario: Password doesn't meet the requirements
Then("User fill password with {string}", (password) => {
  SignupPage.enterPassword(password)
});

And('click anywhere', () => {
  SignupPage.clickAnywhere() 
});

Then("should see the password error message", () => {
  SignupPage.PasswordError()
});

// Scenario: Toggling password visibility
When("User fill password with {string}", (password) => {
  SignupPage.enterPassword(password)
});

When("clicks the \"eye\" icon", () => {
  SignupPage.clickEyeIconToShow();
});

Then("the password should be visible", () => {
  SignupPage.shouldSeePasswordAs('text');
});

When("clicks the \"eye\" icon again", () => {
  SignupPage.clickEyeIconToHide();
});

Then("the password should be hidden", () => {
  SignupPage.shouldSeePasswordAs('password'); 
});

// Scenario: First Name doesn't meet the requirements
When("user enters an invalid first name {string}", (firstName) => {
  if (firstName === 'a * 500') { 
    firstName = 'a'.repeat(500);
  }
  SignupPage.enterFirstName(firstName)
});

And('click anywhere', () => {
  SignupPage.clickAnywhere() 
});

Then("should see the name error message", () => {
  SignupPage.FirstNameError()
});

// Scenario Outline: Last Name doesn't meet the requirements
When("user enters an invalid last name {string}", (lastName) => {
  if (lastName === 'a * 500') { 
    lastName = 'a'.repeat(500);
  }
  SignupPage.enterLastName(lastName)
});

And('click anywhere', () => {
  SignupPage.clickAnywhere() 
});

Then("should see the name error message", () => {
  SignupPage.LastNameError()
});

