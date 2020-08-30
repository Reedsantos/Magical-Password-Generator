var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";


function passwordGenerate() {
    var length = prompt("Choose a length for your password between 8 and 128 characters.");
    if (length < 8 || length > 128) {
        alert("That number was not between 8 and 128.");
    }
    else {
        if (confirm("Will your password contain uppercase letters?")) {
        }

        if (confirm("Will your password contain lowercase letters?")) {
        }

        if (confirm("Will your password contain numbers?")) {
        }

        if (confirm("Will your password contain special characters?")) {
        }

    }
};
