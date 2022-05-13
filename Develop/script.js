// Assignment Code
var generateBtn = document.querySelector("#generate");
// variables created for password generation input and prompt messages
var message;
var messageTwo;
var numbersConfirm;
var symbolsConfirm;
var lowerCaseConfirm;
var upperCaseConfirm;
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var symbols = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '}', '[', ']', ':', ';', '"', '|', '<', ',', '>', '.', '?', '/'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Defined generatePassword in this function and created the prompts and messages once button is clicked
function generatePassword() {
  message = parseInt(prompt('How many characters would you like your password to have? Must be between 8 and 128'));
  // if prompt is cancelled
  if (!message) {
    alert('Must add a number between 8 and 128');
  // logs the numerical value the user selects
    } else if (message < 8 || message > 128) {
      message = parseInt(prompt('Number must be a numerical value between 8 and 128'));
  // prompts for criteria in the password
    } else {
      numbersConfirm = confirm('Do you want numbers in your password?');
      symbolsConfirm = confirm('Do you want symbols in your password?');
      lowerCaseConfirm = confirm('Do you want lowercase letters in your password?');
      upperCaseConfirm = confirm('Do you want uppercase letters in your password?');
    }
    
  // if all criteria is cancelled, alerts messageTwo
  if (!numbersConfirm && !symbolsConfirm && !lowerCaseConfirm && !upperCaseConfirm) {
      messageTwo = alert('Must input criteria for password generation');
    }
  // accepts all criteria
    else if (numbersConfirm && symbolsConfirm && lowerCaseConfirm && upperCaseConfirm) {
      messageTwo = numbers.concat(symbols, lowerCase, upperCase);
    }
  // accepts 3 different criteria
    else if  (numbersConfirm, symbolsConfirm, lowerCaseConfirm) {
      messageTwo = numbers.concat(symbols, lowerCase);
    }
    else if (numbersConfirm, symbolsConfirm, upperCaseConfirm) {
      messageTwo = numbers.concat(symbols, upperCase);
    }
    else if (symbolsConfirm, lowerCaseConfirm, upperCaseConfirm) {
      messageTwo = symbols.concat(lowerCase, upperCase);
    }
  // accepts 2 different criteria
    else if (numbersConfirm, symbolsConfirm) {
      messageTwo = numbers.concat(symbols);
    }
    else if (numbersConfirm, lowerCaseConfirm) {
      messageTwo = numbers.concat(lowerCase);
    }
    else if (numbersConfirm, upperCaseConfirm) {
      messageTwo = numbers.concat(upperCase);
    }
    else if (symbolsConfirm, lowerCaseConfirm) {
      messageTwo = symbols.concat(lowerCase);
    }
    else if (symbolsConfirm, upperCaseConfirm) {
      messageTwo = symbols.concat(upperCase);
    }
    else if (lowerCaseConfirm, upperCaseConfirm) {
      messageTwo = lowerCase.concat(upperCase);
    }
  // accepts 1 criteria
    else if (numbersConfirm) {
      messageTwo = numbers;
    }
    else if (symbolsConfirm) {
      messageTwo = symbols;
    }
    else if (lowerCaseConfirm) {
      messageTwo = lowerCase;
    }
    else if (upperCaseConfirm) {
      messageTwo = upperCase;
    }
  };


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
