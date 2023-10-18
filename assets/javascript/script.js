// Assignment code here
var passwordLength = 8;
var combinedArrays = []

const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];


var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


function writePassword() {
  var allPrompts = prompts();
  if (allPrompts) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  } else {
    passwordText.value = "";
  }
}


function generatePassword() {
  var password = "";
  for(var i = 0; i < passwordLength; i++) {
    var randomPass = Math.floor(Math.random() * combinedArrays.length);
    password = password + combinedArrays[randomPass];
  }
  return password;
}


function prompts() {
  combinedArrays = [];
  passwordLength = parseInt(prompt("How many characters do you want in your password?"));
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert("Please choose a number from 8 to 128 characters long.");
        return false;
  }
  if (confirm("Click OK if you want your password to include numbers.")) {
    combinedArrays = combinedArrays.concat(digits);
  }
  if (confirm("Click OK if you want your password to include lowercase letters.")) {
    combinedArrays = combinedArrays.concat(lower);
  }
  if (confirm("Click OK if you want your password to include uppercase letters.")) {
    combinedArrays = combinedArrays.concat(upper);
  }
  if (confirm("Click OK if you want your password to include special characters.")) {
    combinedArrays = combinedArrays.concat(special);
  }
    return true;
}