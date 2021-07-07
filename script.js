// Assignment Code
var generateBtn = document.querySelector("#generate");

var num;
var upper;
var lower;
var special;
var numbers;

// Displays the generated password in the proper container
var passwordText = document.querySelector("#password");

// Function that produces the password following the chosen criteria
function generate(num) {
  // Criteria options
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChar = "!@#$%^&*()-_=+;:',<.>/?";
  var intergers = "0123456789";
  var all = ""
  if (upper) {
    all = all + uppercase
  } 
  
  if (lower) {
    all = all + lowercase
  }

  if (special) {
    all = all + specialChar
  }

  if (numbers) {
    all += intergers
  }

  // Variable that is set when user hits the generate button
  var pass = "";

  // For loop to build the password
  for (var i = 0; i < num; i++) {
    var character = Math.floor(Math.random() * all.length);
    pass += all.substring(character, character +1);
    console.log(character);
  }
  
  console.log(all);
  console.log(pass);

  // Changes the value of passwordText to whatever password is generated
  passwordText.value = pass;
}


// Write password to the #password input
function writePassword() {
  
  // Prompt for users desired criteria
  num = prompt("Choose the length of the password. Min: 8 Max: 128");

  if (parseInt(num) < 8 || parseInt(num) > 128) {
    alert("You must choose a number between 8-128.");
    return writePassword();

  } else {
    upper = confirm("Do you want to include uppercase letters?");
    lower = confirm("Do you want to include lowercase letters?");
    special = confirm("Do you want to include special characters?");
    numbers = confirm("Do you want to include numbers?");
    }

  if (lower === false && upper === false && special === false && numbers === false) {
    alert("Please choose between 8-128.")
  }

generate(num);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
