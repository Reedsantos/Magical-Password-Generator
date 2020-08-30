var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var uppercaseArray = uppercase.split("");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var lowercaseArray = lowercase.split("");
var numbers = "0123456789";
var numbersArray = numbers.split("");
var special = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var specialArray = special.split("");

function passwordGenerate() {
    var resultArray = [];
    var length = prompt("Choose a length for your password between 8 and 128 characters.");
    if (length < 8 || length > 128) {
        alert("That number was not between 8 and 128.");
    }
    else {
        if (confirm("Will your password contain uppercase letters?")) {
            Array.prototype.push.apply(resultArray, uppercaseArray);
        }

        if (confirm("Will your password contain lowercase letters?")) {
            Array.prototype.push.apply(resultArray, lowercaseArray);
        }

        if (confirm("Will your password contain numbers?")) {
            Array.prototype.push.apply(resultArray, numbersArray);
        }

        if (confirm("Will your password contain special characters?")) {
            Array.prototype.push.apply(resultArray, specialArray);
        }

        if (resultArray.length === 0) {
            alert("You must select at lease 1 type of condition to generate a password!");
        }

    }
}
