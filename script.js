//Setting upper, lower, numbers, and special characters using their corresponding numeric value in the ASCII character set 
//Started with lower a and upper A multiplied for each letter in the alphabet then added until lower z and upper Z
var lower = (Math.floor(Math.random() * 26) + 97); 

var upper = (Math.floor(Math.random() * 26) + 65)
//Same as above but started with 0 and multiplied by 10 for each number
var numbers = (Math.floor(Math.random() * 10) + 48);
//Since there are 15 special characters I multiplied by 10 and added 33 (33 is the lowest number that holds a special character value)
var specialChar = (Math.floor(Math.random() * 15) + 33)

//Setting other variables all to false so that it can be chenged to true in the conditionals or remain the same if not selected.
var specialCharSelection = false;
var numberSelection = false;
var lowerSelection = false;
var upperSelection = false;

//user imput to control how long the password will be
function generate() {
    var length = '';
    while (isNaN(length) || length < 8 || length > 128) {
        length = prompt("What length would you like the password to be? (Between 8 to 128 characters)");
        if (length === null) {
            break;
        }
    }
//user input on which kinds of characters to include
    if (length) {
        if (confirm("Add lowercase letters?") == true) {
            lowerSelection = true
        } 

        if (confirm("Add uppercase letters?") == true) {
            upperSelection = true
        }

        if (confirm("Add special characters?") == true) {
            specialSelection = true
        }

        if (confirm("Add numbers?") == true) {
            numberSelection = true
        }
//comparing our true statements with their number equivilant
    var characters = '';
    characters += (lowerSelection ? lower : '');
    characters += (upperSelection ? upper : '');
    characters += (specialCharSelection ? specialChar : '');
    characters += (numberSelection ? numbers : '');

    final = password(length, characters);

    document.getElementById("password").innerHTML = final;

}
//Loop and prints result on page
function password(l, characters) {
    var final = '';
    for (var i = 0; i < l; ++i) {
        final += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return final;
}
