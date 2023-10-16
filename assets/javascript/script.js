// Assignment code here

// prompt1 is hidden until generate button is clicked
const generateBtn = document.querySelector("#generate");
const getPrompt1 = document.querySelector("#prompt");
generateBtn.addEventListener("click", () => {
  getPrompt1.style.display = "block"
})

//Character length validation (not working)
// function validLength() {
//   const passLength = document.getElementById("length").value
//   if (passLength > 128 || passLength < 8) {
// alert("Please choose a length of at least 8 charactors or at most 128 characters");
// document.getElementById("length").focus();
// return false;
//   }
//   }

// const submitBtn = document.querySelector("#submit");
// const getPrompt2 = document.querySelector("#prompt2");
// const passLength = document.getElementById("length").value;

// submitBtn.addEventListener("click", () => {
//     if (passLength > 128 || passLength < 8) {
// alert("Please choose a length of at least 8 charactors or at most 128 characters");
//   } else {
//     getPrompt2.style.display = "block";
//   }
// })

const submitBtn = document.querySelector("#submit");
const getPrompt2 = document.querySelector("#prompt2");
const passLength = document.getElementById("length").value;
submitBtn.addEventListener("click", () => {
    if (passLength > 128 || passLength < 8) {
alert("Please choose a length of at least 8 characters or at most 128 characters");
return false;
  } else if (passLength >= 8 && passLength <= 128) {
    getPrompt2.style.display = "block";
  }
  })



// const submitBtn = document.querySelector("#submit");
// const getPrompt2 = document.querySelector("#prompt2");
// const passLength = document.getElementById("length").value;
// submitBtn.addEventListener("click", () => {
//   function validLength() {
//     if (passLength > 128 || passLength < 8) {
// alert("Please choose a length of at least 8 charactors or at most 128 characters");
//   } else {
//     getPrompt2.style.display = "block";
//   }
// }
// })
// console.log(validLength)




// prompt2 is hidden until submit button is clicked
// const submitBtn = document.querySelector("#submit");
// const getPrompt2 = document.querySelector("#prompt2");
// submitBtn.addEventListener("click", () => {
//   getPrompt2.style.display = "block"
// })




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
