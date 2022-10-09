// Assignment Code
var generateBtn = document.querySelector("#generate");

// Possible list of characters that can be used
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = uppercase.map(letter => letter.toLowerCase());
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //How long should PW be
  var passwordLength = prompt('How long would you like your password to be? (8-128)', '12')

  if ((passwordLength < 7) || (passwordLength > 128)) {
    passwordLength
  }
  console.log(passwordLength)

  var passwordOptions

  //Do you want to use uppercase
  var useUppercase = confirm('Would you like to use uppercase letters?')
  console.log(useUppercase)

  if (useUppercase) {
    passwordOptions = passwordOptions.concat(useUppercase)
  }

  //Do you want to use lowercase
  var useLowercase = confirm('Would you like to use lowercase letters?')
  console.log(useLowercase)

  if (useLowercase) {
    passwordOptions = passwordOptions.concat(useLowercase)
  }

  //Do you want to use numbers
  var useNumbers = confirm('Would you like to use numbers?')
  console.log(useNumbers)

  if (useNumbers) {
    passwordOptions = passwordOptions.concat(useNumbers)
  }

  //Do you want to use special
  var useSpecial = confirm('Would you like to use special characters?')
  console.log(useSpecial)
  if (useSpecial) {
    passwordOptions = passwordOptions.concat(useSpecial)
  }

  console.log(passwordOptions)


}

