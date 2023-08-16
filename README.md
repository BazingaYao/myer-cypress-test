# E2E Test With Cypress + Cucumber

This project encompasses Automated e2e testing for myer sign up feature, using cypress + cucumber，and node v18.12.0.

## Getting Started ✨

### Install dependencies

```bash
$ npm i
```

### Run Tests

```shell
$ npx cypress open
```

## Project structure

```
$PROJECT_ROOT
│
├── .vscode
│
├── cypress
│   │
│   ├── e2e
│   │    │
│   │    │── signup
│   │    │      │
│   │    │      │── signup.js
│   │    │      │
│   │    │      │── signupPage.js
│   │    │      │
│   │    │── signup.feature
│   │    │
│   │    │── specs.cy.js
│   │    │
│   ├── fixtures
│   │      │
│   │      │── example.json
│   │      │
│   ├── support
│   │      │
│   │      │── commands.js
│   │      │
│   │      │── e2e.js
│   │      │
│   │
│   ├── screenshots
│   │
│   ├── videos
│   │
│
├── cypress.config.js
│
├── package-lock.json
│
├── package.json
│
├── READ.md
│
```

## Scenarios Include

---

<div style="line-height:1.5;">
✅ User try to sign up with blank email address<br>
✅ User try to signup with invalid email<br>
✅ User try to sign up with invalid password<br>
✅ User try to sign up with invalid first name<br>
✅ User try to sign up with invalid last name<br>
✅ User try to sign up with invalid mobile phone<br>
✅ User try to sign up with invalid date of birth<br>
✅ User try to sign up with invalid address<br>
✅ User try to sign up with an existing account<br>
✅ Successful signup
</div>


---

## To-Do-List

---
- Add scenario with responsive: Test the responsiveness of the application on different devices and orientations.
- Utilize Background in Feature Files: Implement the Background keyword for common setup steps that are shared across multiple scenarios.
- Incorporate Scenario Outlines: Where possible, group similar scenarios and use Scenario Outlines with Examples to minimize redundancy.
- Apply Tags for Test Organization: Utilize tags to categorize and selectively run specific sets of tests.
- Improve error handling and provide descriptive error messages.

---

## Issues Found

---
- There is no immediate alert to inform the user that the email is already registered when user click 'Join'. Instead, the alert only appears after filling in all the information and clicking "Create Account."
- Unlimited Length for First and Last Names are permitted: The fields for the first name and last name do not have a character limit, and extremely long entries (e.g., 500 characters) are not flagged as errors.
- Unlimited Length for Password are permitted: Similarly, the password field does not have a character limit, and very long passwords (e.g., 500 characters) are not flagged as errors.
- Spaces and Special Characters in Email Addresses are permitted: The system currently does not flag email addresses containing spaces or special characters as errors, which might lead to invalid email formats.


---