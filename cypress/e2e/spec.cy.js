// describe('User Signup', () => {
//   it('should show email error message when leaving email blank', () => {
//     cy.visit('https://www.myer.com.au/join')
//     cy.get('button[type="button"]').contains('Join').click({force: true});
//     cy.get('#email-error-text').should('exist').contains("Please enter a valid email address");
//   })
// })

//   it('should show email error message with invalid email', () => {
//     cy,get('#email').type(email)
//     cy.get('button[type="button"]').contains('Join').click({force: true});
//     cy.get('#email-error-text').should('exist').contains("Please enter a valid email address");
//   })

//   it('should show other info inputs with valid email', () => {
//     cy.get('input[id=password]').should('be.visible'); 
//     cy.get('input[id=first-name]').should('be.visible'); 
//     cy.get('input[id=last-name]').should('be.visible'); 
//     cy.get('input[id=mobile-phone]').should('be.visible'); 
//     cy.get('input[id=date-of-birth]').should('be.visible'); 
//     cy.get('input[id=address]').should('be.visible'); 
//   })

//   it('should show password error message with invalid password', () => {
//     cy.get('input[id=password]').type(password)
//     cy.get('input[id=first-name]').type(firstName)
//     cy.get('input[id=last-name]').type(lastName) 
//     cy.get('input[id=mobile-phone]').type(mobileNumber) 
//     cy.get('input[id=date-of-birth]').type(DOB)
//     cy.get('#address').type(address).click();
//     cy.get('.MuiList-root .MuiButtonBase-root').first().click();
//     cy.get('#create-account').click();
//     cy.get('password-error-text').should('exist').contains("Please enter a valid password");
    
//   })

//   it('should show first name error message with invalid first name', () => {
//     cy.get('input[id=password]').type(password)
//     cy.get('input[id=first-name]').type(firstName)
//     cy.get('input[id=last-name]').type(lastName) 
//     cy.get('input[id=mobile-phone]').type(mobileNumber) 
//     cy.get('input[id=date-of-birth]').type(DOB)
//     cy.get('#address').type(address).click();
//     cy.get('.MuiList-root .MuiButtonBase-root').first().click();
//     cy.get('#create-account').click();
//     cy.get('first-name-error-text').should('exist').contains("Please enter a valid name");
    
//   })
//   it('should show successful signup', () => {
//     cy.get('input[id=password]').type(password)
//     cy.get('input[id=first-name]').type(firstName)
//     cy.get('input[id=last-name]').type(lastName) 
//     cy.get('input[id=mobile-phone]').type(mobileNumber) 
//     cy.get('input[id=date-of-birth]').type(DOB)
//     cy.get('#address').type(address).click();
//     cy.get('.MuiList-root .MuiButtonBase-root').first().click();
//     cy.get('#create-account').click();
//     cy.url().should('include', '/account')
//   })

//   it('should show error message with account already exists', () => {
//   })