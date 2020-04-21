// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var length = prompt("Between 8 and 128, how long do you want your password?");
  var upperCase = prompt("Would you like uppercase letters, y or n?");
  var numbers = prompt("Would you like numerical values, y or n?");
  var specialCharacters = prompt("Would you like special characters, y or n?");
  console.log(length, upperCase, numbers, specialCharacters);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
