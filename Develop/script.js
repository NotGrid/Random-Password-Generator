// Assignment Code
var generateBtn = document.querySelector("#generate");
// variables created for password generation input
var message;
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
  // logs the ammount of characters the user selects
    } else if (message < 8 || message > 128) {
      message = parseInt(prompt('Number must be a numerical value between 8 and 128'));
  // prompts for criteria in the password
    } else {
      numbers = confirm('Do you want numbers in your password?');
      symbols = confirm('Do you want symbols in your password?');
      lowerCase = confirm('Do you want lowercase letters in your password?');
      upperCase = confirm('Do you want uppercase letters in your password?');
    }
  };



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
