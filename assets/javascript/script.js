// Assignment code here

// prompt1 is hidden until generate button is clicked
const generateBtn = document.querySelector("#generate");
const getPrompt1 = document.querySelector("#prompt");
generateBtn.addEventListener("click", () => {
  getPrompt1.style.display = "block"
})

// Validates user input that it's a number >= 8 and <=128
generateBtn.addEventListener("click", (event) => {
  event.preventDefault();
  getPrompt1.style.display = "block"
  })

const lengthValue = document.getElementById("lengthValue")
const lengthForm = document.getElementById("lengthForm");
lengthForm.addEventListener("submit", (event) => {
  event.preventDefault()
  console.log(lengthValue.value)
  })

// if (lengthform.value == "") {
//   alert("Password length cannot be empty")
// }

// function validateLength(lengthValue) {
//   if (lengthValue.length == 0) {
//     alert("Password length cannot be empty") 
//   }
// }

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
