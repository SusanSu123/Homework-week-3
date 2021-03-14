// Assignment Code
var generateBtn = document.querySelector("#generate");

var allLetters = ['!','@','#','%','^','&','*''$','(',')',
                  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
                  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
                  '0','1','2','3','4','5','6','7','8','9'];
var specialLetters = ['!','@','#','%','^','&','*''$','(',')'];
var uppcaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numberLetters = ['0','1','2','3','4','5','6','7','8','9'];


var passwordLength ;
var includeSpecialLetters;
var includeNumberLetters;
var includeUppcaseLetters;
var includeLowercaseLetters;


function generatePassword() {
 // generate password here

  passwordLength = prompt("How many characters in password?");
  
  if(passwordLength < 8 || passwordLength > 28){
    return "Password must be greater than 8 and less than 28";
  }
  
  includeSpecialLetters = confirm("Do you need special characters?");
  includeUppcaseLetters = confirm("Do you need uppcase characters");
  includeLowercaseLetters = confirm("Do yu need lowercase characts?");
  includeNumberLetters = confirm("Do you need numbers?");
  // passrod legnth is 10;
   var passwordString = "";

   // You need to get 10 random letters from allLetters array
   for(var i = 0; i < passwordLength; i++)
   {
     var randomLetter =  allLetters[Math.floor(Math.random() * passwordLength)];
     passwordString += randomLetter;
     console.log(randomLetter)
    // testing 
   }

   // if user select numbers, you need to check PasswordString has at least one number
   if(user Number){

   }

  
  console.log(passwordString)
  console.log(passwordLength)
  console.log(includeSpecialLetters)
  return passwordString;
}


// Write password to the #password input
function writePassword() {
  var passwordResult = generatePassword();
  var passTExtElement = document.querySelector("#password");

  passTExtElement.value = passwordResult;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);