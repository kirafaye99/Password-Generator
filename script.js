// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let passwordText = document.querySelector("#password");
  let length = askLength();  
  let incLower = boolPrompt('Include lowercase?')
  let incUpper = boolPrompt('Include uppercase?')
  let incNumber = boolPrompt('Include numbers?')
  let incSpecial = boolPrompt('Include special characters?')
  while(!(incLower || incUpper || incNumber || incSpecial)){
    incLower = boolPrompt('Include lowercase?')
    incUpper = boolPrompt('Include uppercase?')
    incNumber = boolPrompt('Include numbers?')
    incSpecial = boolPrompt('Include special characters?')
  }


  let password = generatePassword(length, incLower, incUpper, incNumber, incSpecial);
  passwordText.value = password;

}
function askLength(){
  let length = prompt("How many characters do you want in your password?");  
  if(length < 8 || length > 128){
    return askLength();
  } 
  else{
    return length; 
  }
}
function boolPrompt(prompttxt){
  let yn = prompt(prompttxt + '(y/n)');
  if(yn === 'y' || yn === 'Y'){
    return true;
  }
  return false;

}

function randomString(length, chars) {
  let result = '';
  for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}


function generatePassword(length, incLower, incUpper, incNumber, incSpecial){
  let possibleChars = ''
  if(incLower){
    possibleChars+= 'abcdefghijklmnopqrstuvwxyz';
  }
  if(incUpper){
    possibleChars+= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
  if(incNumber){
    possibleChars+= '1234567890'
  }
  if(incSpecial){
    possibleChars+= ' !\'#$%&\"()*+-,./:;<=>?@[]\\^_`{}|~'
  }
  return randomString(length, possibleChars);
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
