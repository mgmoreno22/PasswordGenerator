// --------- Variable Declaration and Reset Information --------------

//Event variable
var generateBtn = document.querySelector("#generate");
var showPassword = document.querySelector("#showPass")

// Declared variables 
var specialChar = false;
var lower = false;
var upper = false;
var numbers = false;
var pLength = 0;

//Declared variables for password generator process
var password = "";
var randNum = 0;
var pChar = "";

//Declaring arrays
var genPassArray = [];
var numArray = ["0","1","2","3","4","5","6","7","8","9"];
var lowerArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialCharArray = ["!","@","#","$","%","^","&","*","(",")","-","_","\"","\'","?"];

function reset() {
    // Reset variables 
    specialChar = false;
    lower = false;
    upper = false;
    numbers = false;
    pLength = 0;

    // Reset Generator variables
    password = "";
    pChar = "";
    randNum = 0;

    //Reset arrays
    genPassArray = [];
}

// ---------- End of Variable information ---------------
// -------- Start of Password Generator Function ----------

function generatePassword() {
    //Make sure all values are default if reusing button
    reset();

    //check for valid number response
    do {
        pLength = prompt("How many characters would you like to use?");

        if (pLength === null) {
            password = "Password Cancelled"
            return password; //break out of function early
        }
        else if (pLength >= 8 && pLength <= 128) {
            //prompt for other password data
            lower = confirm("Do you want to use Lowercase letters?");
            upper = confirm("Do you want to use Uppercase letters?");
            numbers = confirm("Do you want to use Numbers?")
            specialChar = confirm("Do you want to use Special Characters?");

        } 
        else if (pLength > 128) {
            alert("Please choose a smaller number");
            pLength = 0;
        }
        else if (pLength < 8) {
            alert("Please choose a larger number");
            pLength = 0;
        }
        else {
            alert("Please use a valid integer (i.e. '8' not 'eight')");
            pLength = 0;
            console.log(pLength);
        }
    } while (pLength <= 7);

    // Log user data for password
    console.log("Password Length: " + pLength);
    console.log("Lowercase: " + lower);
    console.log("Uppercase: " + upper);
    console.log("Numbers: " + numbers);
    console.log("Special Characters: " + specialChar);

    //add relevant characters into array used for password generation
    if (lower) {
        genPassArray = genPassArray.concat(lowerArray);
    }
    if (upper) {
        genPassArray = genPassArray.concat(upperArray);
    }
    if (numbers) {
        genPassArray = genPassArray.concat(numArray);
    }
    if (specialChar) {
        genPassArray = genPassArray.concat(specialCharArray);
    }

    // loop to generate correct length password
    for (i=1; i <= pLength; i++) {
        randNum = Math.floor(Math.random() * genPassArray.length);
        pChar = genPassArray[randNum];
        password += pChar;
    }

    console.log("password: " + password);
    console.log("------------------------")

    return password;
}

// ---------End of Password Generation Function---------

// Write password to the #password input
function writePassword() {
    var pass = generatePassword();
    var passText = document.querySelector("#password");

    passText.value = pass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);