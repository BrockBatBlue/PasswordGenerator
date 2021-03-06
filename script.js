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
  if (length > 128 || length < 8 || isNaN(length)){
    alert("Please input a valid number between 8 and 128.")
    return "Try Again"
  }
  var upperCase = confirm("Would you like uppercase letters?");
  var numbers = confirm("Would you like numerical values?");
  var specialCharacters = confirm("Would you like special characters?");

  var letterArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var upperLetterArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var numberArray = [0,1,2,3,4,5,6,7,8,9]
  var specialArray = ["!",'"',"#","$","%","&","'","(",")","*","+",",",".","/",":",";","<",">","?","[","]","^","_","`","{","}","~","|"]
  
  var allArrays = [letterArray]
  var generatedPassword = ""

  if (upperCase === true) {
    allArrays.push(upperLetterArray)
  }
  if (numbers === true) {
    allArrays.push(numberArray)
  }
  if (specialCharacters === true) {
    allArrays.push(specialArray)
  }
  
  for(var i = 0; i< length; i++){
    //Generate random number between 0 and the number of Arrays
    var typeIndex=Math.floor(Math.random()*allArrays.length)

    //Generate random number between 0 and the length of the random array chosen above
    var characterIndex=Math.floor(Math.random()*allArrays[typeIndex].length)

    generatedPassword = generatedPassword+allArrays[typeIndex][characterIndex]
    console.log(generatedPassword)

  }

  return generatedPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
