// Assignment Code
var generateBtn = document.querySelector("#generate");

var caseArray = [];
var specialChar = ['!','@','#','%','^','&','*','$','(',')',']','>','<','?','/'];
var upperCaseChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCaseChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numericChar = ['0','1','2','3','4','5','6','7','8','9'];


var passwordLength;
var includeSpecial;
var includeNumeric;
var includeUpperCase;
var includeLowerCase;


function generatePassword() {
 // generate password here

 var passwordString = "";


  passwordLength = prompt("How many characters in password?");
  
  if(passwordLength < 8 || passwordLength > 128){
    return "Password must be greater than 8 and less than 28";
  }
  
 var flag = true;
 while(flag) {
  includeSpecial = confirm("Do you want to include special characters?");
  includeUpperCase = confirm("Do you want to include uppercase characters");
  includeLowerCase = confirm("Do you want to include lowercase characters?");
  includeNumeric = confirm("Do you want to include numeric characters?");


  if (includeLowerCase || includeUpperCase || includeNumeric || includeSpecial) {
    flag = false;
  }
  else {
    alert("Please select one type of character");
  }
}
if (includeLowerCase){
  caseArray.push(lowerCaseChar);
}
if (includeUpperCase){
  caseArray.push(upperCaseChar)
}
if (includeNumeric){
  caseArray.push(numericChar)
} 
if (includeSpecial){
  caseArray.push(specialChar) 
} 

   for(var i = 0; i < passwordLength; i++)
   {
    var randomCharArrayNum;
    var selectedCharArray;
    var randomCharNum;
    var randomChar;
    
    randomCharArrayNum = parseInt(Math.floor(Math.random()*caseArray.length)); 

    selectedCharArray = caseArray[randomCharArrayNum]; 

    randomCharNum = Math.floor(Math.random()*selectedCharArray.length);

    randomChar = selectedCharArray[randomCharNum];
    
    passwordString += randomChar;  
}

return passwordString;

passwordEntry.textContent = passwordString;    

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
