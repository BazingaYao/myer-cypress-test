const URL = 'https://www.myer.com.au/join'
const EMAIL_ADDRESS = '#email'
const PASSWORD = '#password'
const JOIN_ERROR = '#email-error-text'
const PASSWORD_ERROR ='#password-error-text'


class SignupPage {
  static visit() {
    cy.visit(URL);
  }

  static enterEmailAddress(email) {
    cy.get(EMAIL_ADDRESS).type(email);
  }

  static clickButton(buttonLabel) {
    cy.contains('Join', buttonLabel).click();
  }

  static JoinError() {
    cy.get(JOIN_ERROR).contains("Please enter a valid email address");
  }

  static shouldSeeInformationFields() {
    cy.get('input[id=password]').should('be.visible'); 
    cy.get('input[id=first-name]').should('be.visible'); 
    cy.get('input[id=last-name]').should('be.visible'); 
    cy.get('input[id=mobile-phone]').should('be.visible'); 
    cy.get('input[id=date-of-birth]').should('be.visible'); 
    cy.get('input[id=address]').should('be.visible'); 
  }

  static enterPassword(password) {
    cy.get(PASSWORD).type(password);
  }

  static clickAnywhere() {
    cy.get('body').click();
  }

  static PasswordError() {
    cy.get(PASSWORD_ERROR).contains("Please enter a valid password");
  }

  static clickEyeIconToShow() {
    cy.get('#password-hidden-icon').click();
  }
  
  static clickEyeIconToHide() {
    cy.get('#password-show-icon').click();
  }

  static shouldSeePasswordAs(type) {
    cy.get('#password').should('have.attr', 'type', type);
  }
}

export default SignupPage;