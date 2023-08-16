
const URL = 'https://www.myer.com.au/join'
const EMAIL_ADDRESS = '#email'
const PASSWORD = '#password'
const EMAIL_ERROR = '#email-error-text'
const PASSWORD_ERROR ='#password-error-text'
const FIRST_NAME_ERROR = '#first-name-error-text'
const LAST_NAME_ERROR = '#last-name-error-text'
const MOBILE_NUMBER_ERROR= '#mobile-phone-error-text'
const DOB_ERROR = '#date-of-birth-error-text'
const ADDRESS_ERROR = '#address-error-text'


class SignupPage {
  static visit() {
    cy.visit(URL);
  }

  //Email Field
  static enterEmailAddress(email) {
    cy.get(EMAIL_ADDRESS).type(email);
  }

  static clickJoinButton() {
    cy.get('button[type="button"]').contains('Join').click({force: true});
  }
 
  //Join Button
  static emailError() {
    cy.get(EMAIL_ERROR).contains("Please enter a valid email address");
  }

  //Personal Information Field
  static shouldSeeInformationFields() {
    cy.get('input[id=password]').should('be.visible'); 
    cy.get('input[id=first-name]').should('be.visible'); 
    cy.get('input[id=last-name]').should('be.visible'); 
    cy.get('input[id=mobile-phone]').should('be.visible'); 
    cy.get('input[id=date-of-birth]').should('be.visible'); 
    cy.get('input[id=address]').should('be.visible'); 
  }

  //Password Field
  static enterPassword(password) {
    cy.get(PASSWORD).type(password).click();
  }

  static clickAnywhere() {
    cy.get('body').click();
  }

  static passwordError() {
    cy.get(PASSWORD_ERROR).contains("Please enter a valid password");
  }

  //Password Visibility
  static clickEyeIconToShow() {
    cy.get('#password-hidden-icon').click();
  }
  
  static clickEyeIconToHide() {
    cy.get('#password-show-icon').click();
  }

  static shouldSeePasswordAs(type) {
    cy.get('#password').should('have.attr', 'type', type);
  }

  //First Name Field
  static enterFirstName(firstName) {
    cy.get('#first-name').type(firstName);
  }

  static firstNameError() {
    cy.get(FIRST_NAME_ERROR).contains("Please enter a valid name");
  }

  //Last Name Field
  static enterLastName(lastName) {
    cy.get('#last-name').type(lastName);
  }

  static lastNameError() {
    cy.get(LAST_NAME_ERROR).contains("Please enter a valid name");
  }

  //Mobile Number Field 
  static enterMobileNumber(mobileNumber) {
    cy.get('#mobile-phone').type(mobileNumber);
  }

  static mobileNumberError() {
    cy.get(MOBILE_NUMBER_ERROR).contains("Please enter a valid Australian mobile phone number");
  }

  static verifyMobileNumber(expectedNumber) {
    cy.get('#mobile-phone').should('have.value', expectedNumber);
  }

  //Date of Birth Field
  static enterDOB(DOB) {
    cy.get('#date-of-birth').type(DOB);
  }

  static dateOfBirthError(errorMessage) {
    cy.get(DOB_ERROR).contains(errorMessage);
  }

  //Address Finder Field
  static enterAddress(address) {
    cy.get('#address').type(address).click();
    cy.get('.MuiList-root .MuiButtonBase-root').first().click();
  }

  static addressError() {
    cy.get(ADDRESS_ERROR).contains("Please enter a valid address");
  }

}

export default SignupPage;