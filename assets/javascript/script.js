// Global variables

const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

let combinedArrays = []


// Selects generate button and listens for the mouse to click it

const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


// Prompts for the user to answer about their desired password

// Sets password length and then verifies that a number was entered and that the number is >= 8 and <= 128
function prompts() {
  passwordLength = prompt("How many characters do you want in your password?");
  
  if (passwordLength == null || isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Password must contain at least 8 characters and no more than 128 characters. Please try again.");
    return false;
}
// Asks user if he/she wants to include a number in the password. If so, it will add digits to the combined array without affecting the rest of the array.
  if (confirm("Click OK if you want your password to include numbers.")) {
      combinedArrays = combinedArrays.concat(digits);
  }
// Asks user if he/she wants to include lowercase letters in the password. If so, it will add lowercase letters to the combined array without affecting the rest of the array.
  if (confirm("Click OK if you want your password to include lowercase letters.")) {
      combinedArrays = combinedArrays.concat(lower);
  }
// Asks user if he/she wants to include uppercase letters in the password. If so, it will add uppercase letters to the combined array without affecting the rest of the array.
  if (confirm("Click OK if you want your password to include uppercase letters.")) {
      combinedArrays = combinedArrays.concat(upper);
  }
// Asks user if he/she wants to include special characters in the password. If so, it will add special characters to the combined array without affecting the rest of the array.
  if (confirm("Click OK if you want your password to include special characters.")) {
      combinedArrays = combinedArrays.concat(special);
  }
// Verifies that at least one character type was selected.
  if (combinedArrays.length === 0) {
      alert("Please select at least one character type for your password.");
      return false;
  }
  return true;
}


// Combines user input, option arrays, and random function to generate a password

function generatePassword() {
  let password = "";
  for(let i = 0; i < passwordLength; i++) {
    const randomPass = Math.floor(Math.random() * combinedArrays.length);
    password = password + combinedArrays[randomPass];
  }
  return password;
}


// Writes the generated password to the password text area

function writePassword() {
  const answeredPrompts = prompts();
  if (answeredPrompts) {
    let password = generatePassword();
    const passwordText = document.querySelector("#password");
    passwordText.value = password;
  } else {
    passwordText.value = "";
  }
}