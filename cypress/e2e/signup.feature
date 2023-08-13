Feature: User Signup

   Scenario Outline: Successful Signup
      Given user is on the signup page
      When find the email address input and type with "<email>"
      And find the join button and click
      Then should see the other information fields
      And find password input and type "<password>"
      And find first name input and type "<firstName>"
      And find last name input and type "<lastName>"
      And find mobile number input and type "<mobileNumber>"
      And find birthday input and type "<DOB>"
      And find address input and type "<address>"
      Then user pick a correct address
      And find the create account button and click
      Then user should be transferred to the new page

      Examples:
         | email               | password     | firstName | lastName | mobileNumber | DOB        | address                                |
         | user.test@gmail.com | Valid_pwd123 | John      | Doe      | 0412345678   | 12/08/1990 | 111 Elizabeth Drive, BROULEE  NSW 2537 |

   Scenario: Unsuccessful Signup with invalid email
      Given user is on the signup page
      When find the email address input and type with "<email>"
      And find the join button and click
      Then should see the email error message
# And find password input and type "<password>"
# And find first name input and type "<firstName>"
# And find last name input and type "<lastName>"
# And find mobile number input and type "<mobileNumber>"
# And find birthday input and type "<DOB>"
# And find address input and type "<address>"
# Then user pick a correct address
# And find the create account button and click
# Then user should be transferred to the new pag






# #Email Address Field
# Scenario Outline: User enters an invalid email address (reason: <type>)
#    Given the user is on the signup page
#    When user fill email address with "<email>"
#    And click the "Join" button
#    Then should see the join error message

#    Examples:
#       | type                            | email            |
#       | email is too short              | a@.com           |
#       | email contains space            | user @gmail.com  |
#       | email without at symbol         | user.gmail.com   |
#       | email with too many at symbols  | user@@gmail.com  |
#       | email with invalid domain       | user@test.       |
#       | email with special characters   | user!@gmail.com  |
#       | email with emoji                | user😀@gmail.com |
#       | email is a js injection         | '-alert(1)-'     |
#       | email is a SQL injection        | ' or 1=1; --'    |
#       | email contains foreign language | 你好@gmail.com   |

# Scenario: User enters a valid email address
#    Given the user is on the signup page
#    When user fill email address with "user.test@gmail.com"
#    And click the "Join" button
#    Then should see the other information fields

# #Password Field
# Scenario Outline: Password doesn't meet the requirements (reason: <type>)
#    Given the user is on the signup page
#    When user fill email address with "user.test@gmail.com"
#    And click the "Join" button
#    When user fill password with "<password>"
#    And click anywhere
#    Then should see the password requirement with selector "<selector>" color is "<color>"
#    And should see the password error message

#    Examples:
#       | type                                    | password     | selector                                        | color            |
#       | password is less than 8 characters      | User1        | [data-automation=\"pw-strength-length-label\"]  | rgb(224, 21, 66) |
#       | password does not have uppercase letter | usertestpwd1 | [data-automation=\"pw-strength-capital-label\"] | rgb(224, 21, 66) |
#       | password does not have number           | Usertestpwd  | [data-automation=\"pw-strength-number-label\"]  | rgb(224, 21, 66) |

# Scenario Outline: Password meet the requirement but invalid (reason: <type>)
#    Given the user is on the signup page
#    When user fill email address with "user.test@gmail.com"
#    And click the "Join" button
#    When user fill password with "<password>"
#    And click anywhere
#    And should see the password error message

#    Examples:
#       | type                         | password            |
#       | password is too long         | A1 * 500            |
#       | password contains emoji      | Dave😀8888          |
#       | password is a js injection   | <script>A1</script> |
#       | password is a SQL injection  | Pwd OR '1'='1       |
#       | password contains 'password' | Password123         |

# Scenario: Toggling password visibility
#    Given the user is on the signup page
#    When user fill email address with "user.test@gmail.com"
#    And click the "Join" button
#    Then user fill password with 'Valid_pwd123'
#    When click the "eye" icon
#    Then the password should be visible
#    When click the "eye" icon again
#    Then the password should be hidden

# #First Name Field
# Scenario Outline: First Name doesn't meet the requirements "reason: <type>"
#    Given the user is on the signup page
#    When user fill email address with "user.test@gmail.com"
#    And click the "Join" button
#    When user enters an invalid first name "<firstName>"
#    And click anywhere
#    Then should see the first name error message

#    Examples:
#       | type                                    | firstName     |
#       | first name is too short                 | a             |
#       | first name contains numbers             | 123           |
#       | first name contains punctuation         | Dave!         |
#       | first name is too long                  | a * 500       |
#       | first name contains emoji               | Dave😀        |
#       | first name is a js injection            | '-alert(1)-'  |
#       | first name is a SQL injection           | ' or 1=1; --' |
#       | first name is contains foreign language | 你好          |

# #Last Name Field
# Scenario Outline: Last Name doesn't meet the requirements "reason: <type>"
#    Given the user is on the signup page
#    When user fill email address with "user.test@gmail.com"
#    And click the "Join" button
#    When user enters an invalid last name "<lastName>"
#    And click anywhere
#    Then should see the last name error message

#    Examples:
#       | type                                   | lastName      |
#       | last name is too short                 | a             |
#       | last name contains numbers             | 123           |
#       | last name contains punctuation         | Dave!         |
#       | last name is too long                  | a * 500       |
#       | last name contains emoji               | Dave😀        |
#       | last name is a js injection            | '-alert(1)-'  |
#       | last name is a SQL injection           | ' or 1=1; --' |
#       | last name is contains foreign language | 你好          |

# #Mobile Number Field
# Scenario Outline: Mobile number doesn't meet the requirements (reason: <type>)
#    Given the user is on the signup page
#    When user fill email address with "user.test@gmail.com"
#    And click the "Join" button
#    When user enters a mobile number "<mobileNumber>"
#    And click anywhere
#    Then should see the mobile error message

#    Examples:
#       | type                               | mobileNumber |
#       | number is not Australian format    | 1234567890   |
#       | number includes international code | +123456789   |
#       | number is too short                | 04           |

# Scenario Outline: Mobile number includes dashes/spaces/dots (reason: <type>)
#    Given the user is on the signup page
#    When user fill email address with "user.test@gmail.com"
#    And click the "Join" button
#    When user enters a mobile number "<mobileNumber>"
#    And click anywhere
#    Then the field should show "0412345678"

#    Examples:
#       | type                   | mobileNumber |
#       | number includes dashes | 04-1234-5678 |
#       | number includes spaces | 04 1234 5678 |
#       | number includes dots   | 04.1234.5678 |

# Scenario: Mobile number exceeds 10 digits limit
#    Given the user is on the signup page
#    When user fill email address with "user.test@gmail.com"
#    And click the "Join" button
#    When user enters a mobile number "04123456789"
#    And click anywhere
#    Then the field should only show first 10 digits "0412345678"

# @Smoke
# #Date of Birth Field
# Scenario Outline: DOB doesn't meet the requirements (reason: <type>)
#    Given the user is on the signup page
#    When user fill email address with "user.test@gmail.com"
#    And click the "Join" button
#    When user enters a date of birth "<DOB>"
#    And click anywhere
#    Then should see the DOB error message "<errorMessage>"

#    Examples:
#       | type                                    | DOB        | errorMessage                                                        |
#       | date is in the future                   | 12/08/2024 | Please enter a date in the past                                     |
#       | date is more than 120 years in the past | 07/08/1903 | Please enter a correct year of birth                                |
#       | date format is invalid                  | 12-08-2000 | Please enter a valid birthday                                       |
#       | user is younger than 15                 | 30/08/2008 | Please note, you must be 15 years or older to be a MYER one Member. |

# #Address Finder Field
# Scenario Outline: Address doesn't meet the requirements (reason: <type>)
#    Given the user is on the signup page
#    When user fill email address with "user.test@gmail.com"
#    And click the "Join" button
#    When user enters an invalid address "<address>"
#    And click the Create Account button
#    Then should see the address error message

#    Examples:
#       | type                         | address             |
#       | address includes punctuation | 462 Elizebeth st!   |
#       | address includes emoji       | 462 Elizebeth st!😀 |





