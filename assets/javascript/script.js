// Assignment code here

// prompt1 is hidden until generate button is clicked
const generateBtn = document.querySelector("#generate");
const getPrompt1 = document.querySelector("#prompt");
generateBtn.addEventListener("click", () => {
  getPrompt1.style.display = "block"
})

// prompt2 is hidden until submit button is clicked
const submitBtn = document.querySelector("#submit");
const getPrompt2 = document.querySelector("#prompt2");
submitBtn.addEventListener("click", () => {
  getPrompt2.style.display = "block"
})


// Get references to the #generate element
// const generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   const password = generatePassword();
//   const passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
