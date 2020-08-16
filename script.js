// Progression 1 
// Check username
// create a function called as checkUserName()
function checkUserName() {
    var username = document.getElementById('usertext').value;
    var splChars = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";
    if (username != "") {
        if ((username.length >= 8) && (username.length < 15)) {
            for (var i = 0; i < username.length; i++) {
                if (splChars.indexOf(str.charAt(i)) == -1) {
                    return true;
                }
            }
        } else {
            return false;
        }

    } else {
        return false;
    }
}
// username should not be empty
// username should be a minimum of 8 characters and above 
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails

// Progression 2 
// Check mail
// create a function called as checkEmail()
function checkEmail() {
    var email = document.getElementById('emailtext').value;
    var expr = /^[a-zA-Z0-9@._]*$/;
    if (!expr.test(email)) {
        return false;
    } else {
        return true;
    }
}
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise

// Progression 3
// Check password
// create a function called as checkPassword()
function checkPassword() {
    var password = document.getElementById('passwordtext').value;
    var pattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]$"
    if (!pattern.test(password)) {
        return false;
    } else {
        return true;
    }
}
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false