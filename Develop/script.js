// Assignment Code
var generateBtn = document.querySelector("#generate");

// variables created for password generation criteria

var numbers = ['1234567890'];
var symbols = ["`~!@#$%^&*()_-+={}[]:;|<,>.?/'"];
var lowerCase = ['abcdefghijklmnopqrstuvwxyz'];
var upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

// Defined generatePassword in this function and created the prompts and messages once button is clicked
function generatePassword() {

  var password = '';
  var passwordCharacters = '';
  var characterLength = parseInt(prompt('How many characters would you like your password to have? Must be between 8 and 128'));
  // if user inputs wrong criteria
  if (!characterLength) {

    alert('Must add a number between 8 and 128');
    // logs the numerical length the user selects
  } else if (characterLength < 8 || characterLength > 128) {
    characterLength = parseInt(prompt('Number must be a numerical value between 8 and 128'));
  } 

  // asks and logs boolean for numbers 
  var numbersSelect = confirm('Would you like numbers in your password?');

  if (numbersSelect) {
    passwordCharacters += numbers;
  }
  // asks and logs boolean for symbols
  var symbolsSelect = confirm('Would you like symbols in your password?');

  if (symbolsSelect) {
    passwordCharacters += symbols;
  }
  // asks and logs boolean for lowercase characters
  var lowerCaseSelect = confirm('Would you like lowercase characters in your password?');

  if (lowerCaseSelect) {
    passwordCharacters += lowerCase;
  }
  // asks and logs boolean for uppercase characters 
  var upperCaseSelect = confirm('Would you like uppercase characters in your password?');

  if (upperCaseSelect) {
    passwordCharacters += upperCase;
  }

  if (!numbersSelect && !symbolsSelect && !lowerCaseSelect && !upperCaseSelect) {
    parseInt(alert('Must choose at least one criteria'));
  } 
  // for loop to generate random password based on selected criteria
  for (var i = 0; i < characterLength; i++) {
    password += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  };
  return password;

};

function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

};

// event listener for button click
generateBtn.addEventListener("click", writePassword);
