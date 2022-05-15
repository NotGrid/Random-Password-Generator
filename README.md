# Random Password Generator

## Table of contents
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Create a random password generator using Javascript functions.

### User Story
```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```
### Acceptance Criteria
```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
### Screenshot
## Once the generate password button is clicked,
![Screenshot 2022-05-14 162102](https://user-images.githubusercontent.com/102490542/168458608-cde1dced-9732-4f56-9883-8201d6adbe30.png)
## A series of prompts and confirms will ask for specific criteria to be add to the password,
![Screenshot 2022-05-14 162127](https://user-images.githubusercontent.com/102490542/168458624-0fdfeb93-6194-4507-9c66-99c5690cfa2e.png)
## And the generated password will be displayed here.
![Screenshot 2022-05-14 161911](https://user-images.githubusercontent.com/102490542/168458636-1433f115-3dda-44bf-9462-db3a00aa20d5.png)



### Links

- Solution URL: [Github URL](https://github.com/NotGrid/Random-Password-Generator)
- Live Site URL: [Github Pages](https://notgrid.github.io/Random-Password-Generator/)

## My process

I started off creating variables I knew I would need in my code. Next was implementing a few if statements to collect data from the variables. Finally, the for loop at the end was created to take the value of all criteria selected and randomly compile it into a password based on the criteria of the assignment.

### Built with

- Semantic HTML5 markup
- CSS
- Javascript

### What I learned
This 'for loop' was an exciting moment for me since it is key to the random generation of the password. Lots of research and assistance help me optimize this code and I am pleased with how it turn out.
```
for (var i = 0; i < characterLength; i++) {
    password += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  };
  return password;
```
### Continued development

Though Javascript has been quite a head scratching journey, I understand how useful it is for so many aspects of development. This encourages me to continue to pursue more knowledge in the subject.

### Useful resources

- [W3Schools](https://www.w3schools.com/js/js_loop_for.asp) - This helped me construct my for loop to implement random generation.


## Author

- LinkedIn - [Andrew White](https://www.linkedin.com/in/andrew-white-053803235/)
- Github - [NotGrid](https://github.com/NotGrid)



