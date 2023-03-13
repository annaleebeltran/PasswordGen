// Assignment code here
var lowerCase = Math.random().toString(36).slice(-8);
var upperCase = lowerCase.toUpperCase;
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?"];
var numberSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var generatePassword = function () {

  var lengthPass = window.prompt("Input number of password length between 8 and 128 characters");
   var passwordLength =[lengthPass];
   var passLength = "";
  if (!passwordLength >= 8 && !passwordLength <= 128) {
    return;
  }
    var upper = window.confirm("Would you like uppercase characters?");
    if (upper) {
      var index = Math.floor(Math.random() * upperCase.length);
      var upperFinal = upperCase[index];
    } else{
      return;
    }

    var lower = window.confirm("Would you like lowercase characters?");
    if (lower) {
      var index2 = Math.floor(Math.random() * lowerCase.length);
      var lowerFinal = upperCase[index2];
    } else{
      return;
    }


    var special = window.confirm("Would you like special characters?");
    if (special) {
      var index3 = Math.floor(Math.random() * specialChar.length);
      var specialFinal = specialChar[index3];
    } else{
      return;
    }
  


    var number = window.confirm("Would you like number characters?");
    if (number) {
      var index4 = Math.floor(Math.random() * numberSet.length);
      var numberFinal = numberSet[index4];
    }else{
      return;
    }
  
    for (var i =  0; i <= passwordLength; i++){
      var passFinal = upperFinal.concat(lowerFinal, specialFinal, numberFinal);
      passLength = passFinal;
    }




};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

if (writePassword){
  generatePassword();
  window.alert("Your password is: " + generatePassword);
}


