Feature: User Signup

Scenario: User enters an invalid email address
    Given the user is on the signup page
    When User fill email address with "user.test@gmail"
    And clicks the "Join" button
    Then should see the join error message

Scenario: User enters a valid email address
    Given the user is on the signup page
    When User fill email address with "user.test@gmail.com"
    And clicks the "Join" button
    Then should see the other information fields

 Scenario: Password doesn't meet the requirements
    Given the user is on the signup page
    When User fill email address with "user.test@gmail.com"
    And clicks the "Join" button
    Then User fill password with 'invalid_password'
    And click anywhere
    Then should see the password error message

 Scenario: Toggling password visibility
    Given the user is on the signup page
    When User fill email address with "user.test@gmail.com"
    And clicks the "Join" button
    Then User fill password with 'Valid_password123'
    When clicks the "eye" icon
    Then the password should be visible
    When clicks the "eye" icon again
    Then the password should be hidden



# Scenario: Suscessful Signup
#   Given the user is on the signup page
#   When enters an valid email
#   And clicks the "Join" button
#   And the user fills in the following details according to the requirements
#       | Field               | Value        |
#       | Email Address       | user@mail.com|
#       | Password            | MyPassword1A |
#       | First Name          | Tester       |
#       | Last Name           | Lastname     |
#       | Mobile Number       | 0412345678   |
#       | Date Of Birth       | 01/01/2000   |
#       | Address Finder      | Valid Address|
#   And the user clicks the "Create Account" button
#   Then the user should be redirected to the welcome page

