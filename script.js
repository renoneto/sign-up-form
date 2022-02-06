var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirm_password");
var submitButton = document.getElementById("submit");
var confirmPassReq = document.getElementById("requirements-second");

submitButton.addEventListener("click", checkPasswords);

function checkPasswords() {
    if (password.checkValidity() === true && confirmPassword.checkValidity() === true && password.value === confirmPassword.value) {
        confirmPassReq.style.display = "none";
        password.style.boxShadow = "none";
        password.style.outlineColor = "auto";
        confirmPassword.style.boxShadow = "none";
        confirmPassword.style.outlineColor = "auto";
        console.log('Nice');
    }
    else if (password.checkValidity() === true && password.value != confirmPassword.value) {
        confirmPassReq.style.display = "inline";
        console.log('Not Nice');
    }
}

