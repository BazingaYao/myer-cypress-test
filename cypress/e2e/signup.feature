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

   Scenario Outline: First Name doesn't meet the requirements "reason: <type>"
      Given the user is on the signup page
      When User fill email address with "user.test@gmail.com"
      And clicks the "Join" button
      When user enters an invalid first name "<firstName>"
      And click anywhere
      Then should see the name error message

      Examples:
         | firstName     | type                                    |
         | a             | first name is too short                 |
         | 123           | first name contains numbers             |
         | Dave!         | first name contains punctuation         |
         | a * 500       | first name is too long                  |
         | Dave😀        | first name contains emoji               |
         | '-alert(1)-'  | first name is a js injection            |
         | ' or 1=1; --' | first name is a SQL injection           |
         | 你好          | first name is contains foreign lauguage |

   Scenario Outline: Last Name doesn't meet the requirements "reason: <type>"
      Given the user is on the signup page
      When User fill email address with "user.test@gmail.com"
      And clicks the "Join" button
      When user enters an invalid last name "<lastName>"
      And click anywhere
      Then should see the name error message

      Examples:
         | lastName      | type                                   |
         | a             | last name is too short                 |
         | 123           | last name contains numbers             |
         | Dave!         | last name contains punctuation         |
         | a * 500       | last name is too long                  |
         | Dave😀        | last name contains emoji               |
         | '-alert(1)-'  | last name is a js injection            |
         | ' or 1=1; --' | last name is a SQL injection           |
         | 你好          | last name is contains foreign lauguage |







# Scenario: Last Name doesn't meet the requirements
#    Given the user is on the signup page
#    When User fill email address with "user.test@gmail.com"
#    And clicks the "Join" button
#    When the user enters an invalid <Last Name>
#    Then should see the name error message




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



