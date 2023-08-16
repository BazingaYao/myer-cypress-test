Feature: User Signup

   Background: User is on Signup Page
      Given user is on the signup page

   Scenario: User try to signup with blank email
      When find the join button and click
      Then should see the email error message

   Scenario Outline: User try to signup with invalid email (reason: <type>)
      When find the email address input and type with "<email>"
      And find the join button and click
      Then should see the email error message

      Examples:
         | type                            | email            |
         | email is too short              | a@.com           |
         | email contains space            | user @gmail.com  |
         | email without at symbol         | user.gmail.com   |
         | email with too many at symbols  | user@@gmail.com  |
         | email with invalid domain       | user@test.       |
         | email with special characters   | user!@gmail.com  |
         | email with emoji                | user😀@gmail.com |
         | email is a js injection         | '-alert(1)-'     |
         | email is a SQL injection        | ' or 1=1; --'    |
         | email contains foreign language | 你好@gmail.com   |

   Scenario Outline: Unsuccessful signup due to invalid <field> ((reason: <type>))
      When find the email address input and type with "user_test@gmail.com"
      And find the join button and click
      Then should see the other information fields
      When fill in the form with "<password>", "<firstName>", "<lastName>", "<mobileNumber>", "<DOB>", "<address>"
      And find the create account button and click
      Then should see the "<field>" error message "<errorMessage>"

      Examples:
         | type                                    | field        | password     | firstName | lastName      | mobileNumber | DOB        | address                               | errorMessage                                                        |
         | password is less than 8 characters      | password     | User1        | John      | Doe           | 0412345678   | 12/08/1990 | 111 Elizabeth Drive, BROULEE NSW 2537 | Please enter a valid password                                       |
         | password does not have uppercase letter | password     | usertestpwd1 | John      | Doe           | 0412345678   | 12/08/1990 | 111 Elizabeth Drive, BROULEE NSW 2537 | Please enter a valid password                                       |
         | password does not have number           | password     | Usertestpwd  | John      | Doe           | 0412345678   | 12/08/1990 | 111 Elizabeth Drive, BROULEE NSW 2537 | Please enter a valid password                                       |
         | first name is too short                 | firstName    | Valid_pwd123 | a         | Doe           | 0412345678   | 12/08/1990 | 111 Elizabeth Drive, BROULEE NSW 2537 | Please enter a valid name                                           |
         | first name contains numbers             | firstName    | Valid_pwd123 | 123       | Doe           | 0412345678   | 12/08/1990 | 111 Elizabeth Drive, BROULEE NSW 2537 | Please enter a valid name                                           |
         | first name contains punctuation         | firstName    | Valid_pwd123 | Dave!     | Doe           | 0412345678   | 12/08/1990 | 111 Elizabeth Drive, BROULEE NSW 2537 | Please enter a valid name                                           |
         | first name is too long  letter          | firstName    | Valid_pwd123 | a * 500   | Doe           | 0412345678   | 12/08/1990 | 111 Elizabeth Drive, BROULEE NSW 2537 | Please enter a valid name                                           |
         | last name is a js injection             | lastName     | Valid_pwd123 | John      | '-alert(1)-'  | 0412345678   | 12/08/1990 | 111 Elizabeth Drive, BROULEE NSW 2537 | Please enter a valid name                                           |
         | last name is a SQL injection            | lastName     | Valid_pwd123 | John      | ' or 1=1; --' | 0412345678   | 12/08/1990 | 111 Elizabeth Drive, BROULEE NSW 2537 | Please enter a valid name                                           |
         | last name is contains foreign language  | lastName     | Valid_pwd123 | John      | 你好          | 0412345678   | 12/08/1990 | 111 Elizabeth Drive, BROULEE NSW 2537 | Please enter a valid name                                           |
         | number is not Australian format         | mobileNumber | Valid_pwd123 | John      | Doe           | 1234567890   | 12/08/1990 | 111 Elizabeth Drive, BROULEE NSW 2537 | Please enter a valid Australian mobile phone number                 |
         | number includes international code      | mobileNumber | Valid_pwd123 | John      | Doe           | +123456789   | 12/08/1990 | 111 Elizabeth Drive, BROULEE NSW 2537 | Please enter a valid Australian mobile phone number                 |
         | number is too short                     | mobileNumber | Valid_pwd123 | John      | Doe           | 04           | 12/08/1990 | 111 Elizabeth Drive, BROULEE NSW 2537 | Please enter a valid Australian mobile phone number                 |
         | date is in the future                   | DOB          | Valid_pwd123 | John      | Doe           | 0412345678   | 12/08/2024 | 111 Elizabeth Drive, BROULEE NSW 2537 | Please enter a date in the past                                     |
         | date is more than 120 years in the past | DOB          | Valid_pwd123 | John      | Doe           | 0412345678   | 07/08/1903 | 111 Elizabeth Drive, BROULEE NSW 2537 | Please enter a correct year of birth                                |
         | date format is invalid                  | DOB          | Valid_pwd123 | John      | Doe           | 0412345678   | 12-08-2000 | 111 Elizabeth Drive, BROULEE NSW 2537 | Please enter a valid birthday                                       |
         | user is younger than 15                 | DOB          | Valid_pwd123 | John      | Doe           | 0412345678   | 30/08/2008 | 111 Elizabeth Drive, BROULEE NSW 2537 | Please note, you must be 15 years or older to be a MYER one Member. |
         | address includes punctuation            | address      | Valid_pwd123 | John      | Doe           | 0412345678   | 12/08/1990 | 462 Elizebeth st!                     | Please enter a valid address                                        |
         | address includes emoji                  | address      | Valid_pwd123 | John      | Doe           | 0412345678   | 12/08/1990 | 462 Elizebeth st!😀                   | Please enter a valid address                                        |


   Scenario Outline: Successful Signup
      When find the email address input and type with "<email>"
      And find the join button and click
      Then should see the other information fields
      When fill in the form with "<password>", "<firstName>", "<lastName>", "<mobileNumber>", "<DOB>", "<address>"
      And find the create account button and click
      Then the user should be transferred to the Hello page

      Examples:
         | email               | password     | firstName | lastName | mobileNumber | DOB        | address                                |
         | user_test97@gmail.com | Valid_pwd123 | John      | Doe      | 0412345678   | 12/08/1990 | 111 Elizabeth Drive, BROULEE  NSW 2537 |

   Scenario Outline: User try to singup with an existing account
      When find the email address input and type with "<email>"
      And find the join button and click
      Then should see the other information fields
      When fill in the form with "<password>", "<firstName>", "<lastName>", "<mobileNumber>", "<DOB>", "<address>"
      And find the create account button and click
      Then should see existing account error

      Examples:
         | email               | password     | firstName | lastName | mobileNumber | DOB        | address                                |
         | user_test97@gmail.com | Valid_pwd123 | John      | Doe      | 0412345678   | 12/08/1990 | 111 Elizabeth Drive, BROULEE  NSW 2537 |