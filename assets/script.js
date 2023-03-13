// Assignment code here

var generatePassword = function () {

  var lengthPass = window.prompt("Input number of password length between 8 and 128 characters");

  if (lengthPass >= 8 && lengthPass <= 128) {
  };
    var upper = window.confirm("Would you like uppercase characters?");

    var lower = window.confirm("Would you like lowercase characters?");

    var special = window.confirm("Would you like special characters?");
   
    var number = window.confirm("Would you like number characters?");
    
   let characters = "";
   let passWord = "";

   if(number){
    characters += "0123456789";
   }

   if (special){
    characters += "!@#$%^&*()";
   }

   if (lower){
    characters += "abcdefghijklmnopqrstuvwxyz";
   }

   if (upper){
    characters += "ABCDEFGHIJKLMNOPQRSTUV";
   }

   for (let i = 0; i < lengthPass.length; i++){
    passWord+= characters.charAt(Math.floor(Math.random()* characters.length));
   }

   return passWord;
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
};


