import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import SignupPage from "./signupPage"

// Scenario Outline: Successful Signup
Given("user is on the signup page", () => {
  cy.visit('https://www.myer.com.au/join')
})

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

And ("find password input and type {string}", (password) => {
  SignupPage.enterPassword(password)
});

And ("find first name input and type {string}", (firstName) => {
  SignupPage.enterFirstName(firstName)
});

And ("find last name input and type {string}", (lastName) => {
  SignupPage.enterLastName(lastName)
});

And ("find mobile number input and type {string}", (mobileNumber) => {
  SignupPage.enterMobileNumber(mobileNumber)
});

And ("find birthday input and type {string}", (DOB) => {
  SignupPage.enterDOB(DOB)
});

And ("find address input and type {string}", (address) => {
  SignupPage.enterAddress(address)
});

Then('user pick a correct address', () => {
  cy.get('.MuiList-root .MuiButtonBase-root').first().click();
});

And('find the create account button and click', () => {
  cy.get('#create-account').click();
});

Then('user should be transferred to the new page', () => {
  cy.url('https://www.myer.com.au/account').should('include', '/account')
});








// // Scenario: User enters an invalid email address
// Given("the user is on the signup page", () => {
//   SignupPage.visit();
// })

// When("user fill email address with {string}", (email) => {
//   SignupPage.enterEmailAddress(email)
// })

// And("click the {string} button", () => {
//   cy.get('button[type="button"]').contains('Join').click({force: true});
// });

// Then("should see the join error message", () => {
//   SignupPage.joinError()
// })

// // Scenario: User enters a valid email address
// Then("should see the other information fields", () => {
//   SignupPage.shouldSeeInformationFields();
// });

// // Scenario: Password doesn't meet the requirements
// When("user fill password with {string}", (password) => {
//   SignupPage.enterPassword(password)
// });

// And('click anywhere', () => {
//   SignupPage.clickAnywhere() 
// });

// Then("should see the password requirement with selector {string} color is {string}", (selector, color) => {
//   cy.get(selector).should('have.css', 'color', color);
// });

// And ("should see the password error message", () => {
//   SignupPage.passwordError()
// });

// // Scenario Outline: Password meet the requirement but invalid 
// When("user fill password with {string}", (password) => {
//   SignupPage.enterPassword(password)
// });

// And('click anywhere', () => {
//   SignupPage.clickAnywhere() 
// });

// Then ("should see the password error message", () => {
//   SignupPage.passwordError()
// });

// // Scenario: Toggling password visibility
// When("user fill password with {string}", (password) => {
//   SignupPage.enterPassword(password)
// });

// When("click the \"eye\" icon", () => {
//   SignupPage.clickEyeIconToShow();
// });

// Then("the password should be visible", () => {
//   SignupPage.shouldSeePasswordAs('text');
// });

// When("click the \"eye\" icon again", () => {
//   SignupPage.clickEyeIconToHide();
// });

// Then("the password should be hidden", () => {
//   SignupPage.shouldSeePasswordAs('password'); 
// });

// // Scenario: First Name doesn't meet the requirements
// When("user enters an invalid first name {string}", (firstName) => {
//   if (firstName === 'a * 500') { 
//     firstName = 'a'.repeat(500);
//   }
//   SignupPage.enterFirstName(firstName)
// });

// And('click anywhere', () => {
//   SignupPage.clickAnywhere() 
// });

// Then("should see the first name error message", () => {
//   SignupPage.firstNameError()
// });

// // Scenario Outline: Last Name doesn't meet the requirements
// When("user enters an invalid last name {string}", (lastName) => {
//   if (lastName === 'a * 500') { 
//     lastName = 'a'.repeat(500);
//   }
//   SignupPage.enterLastName(lastName)
// });

// And('click anywhere', () => {
//   SignupPage.clickAnywhere() 
// });

// Then("should see the last name error message", () => {
//   SignupPage.lastNameError()
// });

// // Scenario Outline: Mobile number doesn't meet the requirements 
// When("user enters a mobile number {string}", (mobileNumber) => {
//   SignupPage.enterMobileNumber(mobileNumber)
// });

// And('click anywhere', () => {
//   SignupPage.clickAnywhere() 
// });

// Then("should see the mobile error message", () => {
//   SignupPage.mobileNumberError()
// });

// // Scenario Outline: Mobile number includes dashes/spaces/dots 
// When("user enters a mobile number {string}", (mobileNumber) => {
//   SignupPage.enterMobileNumber(mobileNumber)
// });

// And('click anywhere', () => {
//   SignupPage.clickAnywhere() 
// });

// Then("the field should show {string}", (expectedNumber) => {
//   SignupPage.verifyMobileNumber(expectedNumber)
// });

// // Scenario Outline: Mobile number exceeds 10 digits limit
// When("user enters a mobile number {string}", (mobileNumber) => {
//   SignupPage.enterMobileNumber(mobileNumber)
// });

// And('click anywhere', () => {
//   SignupPage.clickAnywhere() 
// });

// Then("the field should only show first 10 digits {string}", (expectedNumber) => {
//   SignupPage.verifyMobileNumber(expectedNumber)
// });

// // Scenario Outline: DOB doesn't meet the requirements
// When("user enters a date of birth {string}", (DOB) => {
//   SignupPage.enterDOB(DOB)
// });

// And('click anywhere', () => {
//   SignupPage.clickAnywhere() 
// });

// Then("should see the DOB error message {string}", (errorMessage) => {
//   SignupPage.dateOfBirthError(errorMessage)
// });

// // Scenario Outline: Address doesn't meet the requirements (reason: <type>)
// When("user enters an invalid address {string}", (address) => {
//   SignupPage.enterAddress(address)
// });

// And('click the Create Account button', () => {
//   cy.get('#create-account').click();
// });

// Then("should see the address error message", () => {
//   SignupPage.addressError()
// });


// // Scenario Outline: Successful Signup
// When('user enters a valid first name {string}', (firstName) => {
//   SignupPage.enterFirstName(firstName);
// });

// When('user enters a valid last name {string}', (lastName) => {
//   SignupPage.enterLastName(lastName);
// });

// When('user enters a valid mobile number {string}', (mobileNumber) => {
//   SignupPage.enterMobileNumber(mobileNumber);
// });

// When('user enters a valid date of birth {string}', (DOB) => {
//   SignupPage.enterDOB(DOB);
// });

// When('user enters a valid address {string}', (address) => {
//   SignupPage.enterAddress(address);
// });

// When('user pick a correct address', () => {
//   cy.get('.MuiList-root .MuiButtonBase-root').first().click();
// });

// And('click the Create Account button', () => {
//   cy.get('#create-account').click();
// });

// Then('the user should be transferred to the welcome page', () => {
//   cy.visit('https://www.myer.com.au/account')
// });