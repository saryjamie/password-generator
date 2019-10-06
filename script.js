// creating array of values
var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowerArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialCharArr = ["'","!","@","#","$","%","^","&","*","(",")",'"',"?",".",",","/","\\","|","{","}",":",";","`","~",
"[","]"];

// create a function for the generator
function generate() {
  // read constraints from user
  var length = prompt("How many characters would you like to use for your password?");
  if (length < 8 || length > 128) {
    alert("Password length should be between 8 and 128 characters!");
    return;
  }

  

  var specialChar = confirm("Would you like to include special characters?");
  var numChar = confirm("Would you like to include numbers?");
  var lowerCase = confirm("Would you like to include lower case characters?");
  var upperCase = confirm("Would you like to include upper case characters?");

  // an array to save inputs
  let pwArray = [];
  if (specialChar) pwArray = pwArray.concat(specialCharArr);
  if (numChar) pwArray = pwArray.concat(numArr);
  if (lowerCase) pwArray = pwArray.concat(lowerArr);
  if (upperCase) pwArray = pwArray.concat(upperArr);

  var password = "";


  for (var i = 0; i <= length; i++) {
    password += pwArray[Math.floor(Math.random() * (pwArray.length - 1))];
    console.log("password internal: ", password);
  }
    console.log("Password is: ", password);
 
  // add password to display area
  var password = document.querySelector("input").value = password;
}

// create a function to copy to clipboard
function copyPassword() {
  document.getElementById("display").select();
  document.execCommand("copy");
  alert("Password copied to clipboard");
}
