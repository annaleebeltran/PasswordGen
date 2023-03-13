// Assignment code here
var upperCase = ["A", "B", "C", "D", "E", "F", "G"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g"];
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?"];
var numberSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

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

var genPass = function(){

  var upperCaseFun = function(){
  var upper = window.prompt("Would you like uppercase characters?");
  if (upper) {
    var index = Math.floor(Math.random() * upperCase.length);
    var computerChoice = upperCase[index];
  }
}

  var lowerCaseFun = function(){
  var lower = window.prompt("Would you like lowercase characters?");
  if (lower) {
    var index2 = Math.floor(Math.random() * lowerCase.length);
    var computerChoice2 = upperCase[index2];
  }
  }

  var specialCharFun = function(){
  var special = window.prompt("Would you like uppercase characters?");
  if (special) {
    var index3 = Math.floor(Math.random() * specialChar.length);
    var computerChoice3 = specialChar[index3];
  }
}

  var numberFun = function(){
  var number = window.prompt("Would you like uppercase characters?");
  if (number) {
    var index4 = Math.floor(Math.random() * numberSet.length);
    var computerChoice4 = numberSet[index4];
  }
  }

 var inputPass = upperCaseFun +lowerCaseFun + specialCharFun + numberFun;
 var passWord = Math.floor(Math.random() * inputPass.length);
 passWord();

}
if (writePassword) {
  genPass();
}

