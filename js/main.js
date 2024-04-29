//Schaut ob das Passwort getoggelt wird
document.getElementById("togglePassword").addEventListener("click", togglePassword);

//Schaut ob das Theme geändert werden muss
document.getElementById("switchTheme").addEventListener("click", switchTheme)

function switchTheme(){
    console.log("DarkMode aktiv");

}

function togglePassword() {
    var passwordField = document.getElementById("passwordInput");
    var eyeIcon = document.getElementById("togglePassword");
    if(passwordField.type === "password"){
        passwordField.type = "text";
        eyeIcon.className = "fa-solid fa-eye-slash"
    } else{
        passwordField.type = "password";
        eyeIcon.className = "fa-solid fa-eye"
    }
}
