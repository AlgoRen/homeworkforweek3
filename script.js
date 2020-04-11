// Assignment Code
// Creating variables with the list of characters needed.
var generateBtn = document.querySelector("#generate");
var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", 
".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", 
"|", "}", "~", "]"];
var numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Empty array used after determining users conditions.
var passwordVals;
var createdPassword = "";

// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  
  passwordText.value = password;

}
    // Function to randomize placement of characters in array from the array 
    // of characters choosen by user.
 function randomizePlacement(passwordVals) {
    // Using this as a way to randomize the characters in the array.
    // Method being used thanks to Faith Mustapha.
    // src = https://medium.com/@fyoiza/how-to-randomize-an-array-in-javascript-8505942e452
    let randomArray = [];
    while(passwordVals.length !==0){
      let randomIndex = Math.floor(Math.random() * passwordVals.length);
      randomArray.push(passwordVals[randomIndex]);
      passwordVals.splice(randomIndex, 1);
    }
    return passwordVals = randomArray;
 }

  // A function that parses true values that will determine what character types
  // the user had asked for, using an if else conditional pushes array values into
  // passwordVals. Passes passwordVals into randomizePlacement function and places
  // it back into passwordVals.
 function createPasswordArray(par1, par2, par3, par4){
   if ((par1 === true) && (par2 === true) && (par3 === true) && (par4 === true)){
    passwordVals = lowercaseChar.concat(uppercaseChar).concat(specialChar).concat(numericChar);
    passwordVals = randomizePlacement(passwordVals);
   } else if ((par1 === true) && (par2 === true) && (par3 === true) && (par4 === false)){
    passwordVals = lowercaseChar.concat(uppercaseChar).concat(specialChar);
    passwordVals = randomizePlacement(passwordVals);
   } else if ((par1 === true) && (par2 === true) && (par3 === false) && (par4 === false)){
    passwordVals = lowercaseChar.concat(uppercaseChar);
    passwordVals = randomizePlacement(passwordVals);
   } else if ((par1 === true) && (par2 === false) && (par3 === false) && (par4 === false)){
    passwordVals = lowercaseChar;
    passwordVals = randomizePlacement(passwordVals);
  } else if ((par1 === true) && (par2 === false) && (par3 === true) && (par4 === false)){
    passwordVals = lowercaseChar.concat(specialChar);
    passwordVals = randomizePlacement(passwordVals);
   } else if ((par1 === true) && (par2 === false) && (par3 === false) && (par4 === true)){
    passwordVals = lowercaseChar.concat(numericChar);
    passwordVals = randomizePlacement(passwordVals);
   } else if ((par1 === false) && (par2 === false) && (par3 === true) && (par4 === true)){
    passwordVals = specialChar.concat(numericChar);
    passwordVals = randomizePlacement(passwordVals);
   } else if ((par1 === false) && (par2 === true) && (par3 === false) && (par4 === false)){
    passwordVals = uppercaseChar
    passwordVals = randomizePlacement(passwordVals);
   } else if ((par1 === false) && (par2 === false) && (par3 === true) && (par4 === false)){
    passwordVals = specialChar;
    passwordVals = randomizePlacement(passwordVals);
   } else if ((par1 === false) && (par2 === false) && (par3 === false) && (par4 === true)){
    passwordVals = numericChar;
    passwordVals = randomizePlacement(passwordVals);
   } else if ((par1 === false) && (par2 === true) && (par3 === true) && (par4 === true)){
    passwordVals = uppercaseChar.concat(specialChar).concat(numericChar);
    passwordVals = randomizePlacement(passwordVals);
   } else if ((par1 === false) && (par2 === true) && (par3 === true) && (par4 === false)){
    passwordVals = specialChar.concat(numericChar);
    passwordVals = randomizePlacement(passwordVals);
   } else if ((par1 === false) && (par2 === true) && (par3 === false) && (par4 === true)){
    passwordVals = uppercaseChar.concat(numericChar);
    passwordVals = randomizePlacement(passwordVals);
   }
        else { // Fall back condition, hopefully all conditions are met and wont be used.
     alert("That didnt go as planned.")
   }
   // Returning values that have been selected by the user to be used in password.
   return String(passwordVals);
 }

 // Using a random number function to randomly choose a character in array then add it 
 // to a list repeating it for the passwordLength. Random number function being used.
function generateUserPassword(passwordLength, passwordVals){
  // Got reading. Now working to create a string with random character values based
  // on passwordLength.
  var r;
  for (var i = 0; i < passwordLength; i++){
    r = passwordVals[(Math.floor(Math.random() * passwordVals.length))];
    createdPassword += r;
  }
  // Return final password to be used in generatePassword function
  return createdPassword;
}

function generatePassword() {
  // Password condition initial values
  var passwordConditions = false;
  var passwordLengthSuccess = false;

  // Creating prompt and checking conditions for character length;
  while (passwordLengthSuccess === false) {
    passwordLength = prompt("How many characters would you like your password to be?");
    passwordLength = parseInt(passwordLength);
    if (passwordLength > 7 && passwordLength < 129) {
      passwordLength === true;
      break;
    } else {
      passwordLength === false;
    }
  }
  //Displaying to user password length.
  alert("Your password will be " + passwordLength + " characters long.");
  
  // Confirming with user what character values they want and selecting password characters
  while(passwordConditions === false){
    var passwordLowercase = confirm("Would you like lowercase characters in your password?");
    var passwordUppercase = confirm("Would you like uppercase characters in your password?");
    var passwordSpecial = confirm("Would you like special characters in your password?");
    var passwordNumeric = confirm("Would you like numbers in your password?");
    // Has the user said yes to at least one of the prompt?
    if (passwordLowercase === true || passwordUppercase === true || passwordSpecial === true ||
      passwordNumeric === true) {
        // Creating parameters for createPasswordArray function.
        // Assigning truth statements to various answer possibilities.
        if (passwordLowercase === true && passwordUppercase === true && passwordSpecial === true &&
          passwordNumeric === true){ // All conditions true.
            createPasswordArray(true, true, true, true);

          } else if (passwordLowercase === true && passwordUppercase === true && passwordSpecial === true &&
            passwordNumeric === false){ // True for Lowercase, Uppercase, Special. False for Numeric.
            createPasswordArray(true, true, true, false);

          } else if (passwordLowercase === true && passwordUppercase === true && passwordSpecial === false && 
            passwordNumeric === false){ // True for Lowercase, Uppercase. False for Special, Numeric.
            createPasswordArray(true, true, false, false);

          } else if (passwordLowercase === true && passwordUppercase === false && passwordSpecial === false &&
            passwordNumeric === false){ // True for Lowercase. False for Uppercase, Special, Numeric
            createPasswordArray(true, false, false, false);
            
          } else if (passwordLowercase === false && passwordUppercase === true && passwordSpecial === true &&
            passwordNumeric === true){ // False for Lowercase. True for Uppercase, Special, Numeric
            createPasswordArray(false, true, true, true);

          } else if (passwordLowercase === false && passwordUppercase === false && passwordSpecial === true &&
            passwordNumeric === true){ // True for Lowercase, Uppercase. False for Special, Numeric
            createPasswordArray(false, false, true, true);

          } else if (passwordLowercase === false && passwordUppercase === false && passwordSpecial === false &&
            passwordNumeric === true){ // True for Numeric. False for Lowercase, Uppercase, Special
            createPasswordArray(false, false, false, true);

          } else if (passwordLowercase === false && passwordUppercase === true && passwordSpecial === false &&
            passwordNumeric === true){ // True for Uppercase, Numeric. False for Lowercase, Special.
            createPasswordArray(false, true, false, true);

          } else if (passwordLowercase === false && passwordUppercase === true && passwordSpecial === true &&
            passwordNumeric === false){ // True for Uppercase, Special. False for Lowercase, Numeric
            createPasswordArray(false, true, true, false);

          } else if (passwordLowercase === true && passwordUppercase === false && passwordSpecial === false &&
            passwordNumeric === true){ // True for Lowercase, Numeric. False for Uppercase, Special
            createPasswordArray(true, false, false, true);

          } else if (passwordLowercase === true && passwordUppercase === true && passwordSpecial === false &&
            passwordNumeric === true){ // True for Lowercase, Uppercase, Numeric. False for Special
            createPasswordArray(true, true, false, true);
          } else if(passwordLowercase === true && passwordUppercase === false && passwordSpecial === true &&
              passwordNumeric === false) {  // True for Lowercase, Uppercase. False Special, Numeric
              createPasswordArray(true, false, true, false);
            }
          passwordConditions === true;
        } else {
          alert("You must say Ok to at least one password condition. Lets try again.")
        passwordConditions = false;
       }
    // Calling generateUserPassword function that will make the password string
    // out of the array of characters selected.
    generateUserPassword(passwordLength, passwordVals);
    // Final return statement with string value of password made by generatePassword function.
    return createdPassword;
    }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
