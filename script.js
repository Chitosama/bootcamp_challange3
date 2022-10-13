// Assignment Code
var generateBtn = document.querySelector("#generate");

// Possible list of characters that can be used
const uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowercase = uppercase.map((letter) => letter.toLowerCase());
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const special = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "+",
  "-",
  ".",
  "~",
  "|",
  "<",
  ">",
  "=",
  "-",
  "_",
  "/",
  ":",
  ";",
  "?",
  "[",
  "]",
  "{",
  "}",
  "~",
];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log(passwordText)
}

//Generate the random chacter with character limits
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Not used anymore, moved into function generatePassword
// function checkLength(passwordLength){
//   while (passwordLength < 8 || passwordLength > 128) {
//     passwordLength = prompt(
//       "How long would you like your password to be? (8-128)",
//       "12"
//     );
//     return passwordLength
//   }

// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //How long should PW be
  var passwordLength = 0;

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt(
      "How long would you like your password to be? (8-128)",
      "12"
    );
  }

  console.log(passwordLength);

  var passwordOptions = [];

  var useUppercase = false;
  var useLowercase = false;
  var useNumbers = false;
  var useSpecial = false;

  while (!useLowercase && !useNumbers && !useSpecial && !useUppercase)
  {
  //Do you want to use uppercase
  useUppercase = confirm("Would you like to use uppercase letters?");
  console.log(useUppercase);

  if (useUppercase) {
    passwordOptions = passwordOptions.concat(uppercase);
  }

  //Do you want to use lowercase
  var useLowercase = confirm("Would you like to use lowercase letters?");
  console.log(useLowercase);

  if (useLowercase) {
    passwordOptions = passwordOptions.concat(lowercase);
  }

  //Do you want to use numbers
  var useNumbers = confirm("Would you like to use numbers?");
  console.log(useNumbers);

  if (useNumbers) {
    passwordOptions = passwordOptions.concat(numbers);
  }

  //Do you want to use special
  var useSpecial = confirm("Would you like to use special characters?");
  console.log(useSpecial);

  if (useSpecial) {
    passwordOptions = passwordOptions.concat(special);
  }
  }

  console.log(passwordOptions);

  var password='';

  for (var i = 0; i < passwordLength; i++){
    password = password + passwordOptions[getRandomInt(passwordOptions.length)];
    //Used to check password growth 
    //console.log(password)
  }

  return password;
}
