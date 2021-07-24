


# Overview
The purpose of the assignment was to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

## How to install
Clone the repository
Git clone https://github.com/SusanSu123/Homework-week-3.git

Go to index.html and script.js

Open with your favarite browser

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Satisfying the Acceptance Criteria
To satisfy the first criteria, a button was created in HTML and set up so that, when clicked, would fire the password generator script.

To satisfy the second, third, and fourth criteria, a series of prompts are used to determine what kinds of characters the user wants to include as well as how many characters in the password are desired.

To satisfy the fifth criteria, the character prompts are checked to see if all are false. If so, the questions are asked again. The password length prompt checks for input above or below a certain threshold as well as NaN, null, and inputs that are not numbers.

To satisfy the sixth criteria, four character arrays are created with uppercase letters, lowercase letters, special characters, and numbers. Arrays to be included in password generation are pushed into an array. A loop is run for the length of the password, and two random numbers are generated. The first random number chooses which character array will be used and the second chooses a random charcter from the selected array. The character is then concatenated into a password string variable.

To satisfy the seventh criteria, the script modifies the HTML page to display the password after the password has been generated.








