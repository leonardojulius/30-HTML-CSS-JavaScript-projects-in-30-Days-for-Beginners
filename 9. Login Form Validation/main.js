//DOM Elements

const loginContainer = document.querySelector('.login-container');
const loginForm = document.getElementById("loginForm");
const loginUsername = document.getElementById("loginUsername");

const loginPassword = document.getElementById("loginPassword");

const showPasswordIcon = document.querySelector("i.fa-eye");


showPasswordIcon.addEventListener('click', showPassword);


// *Show Hide Password
function showPassword() {
    console.log(loginPassword);

    if(loginPassword.type ==="password"){
        loginPassword.type ="text";
        showPasswordIcon.style.color = "red";
     
    } else {
        loginPassword.type ="password";
        showPasswordIcon.style.color = "#ddd";
        
    }

}
console.log(loginForm)

// *Simple Validation

loginForm.addEventListener("submit", submitValidation);

function submitValidation (event) {
  event.preventDefault();

  if(loginUsername.value === "" || loginUsername.value.length < 3){
    console.log("empty");
  }else{
    console.log("not empty");
  }


  if(loginPassword.value === "" || loginPassword.value.length <  6) {
    console.log(" empty");
  } else {
    console.log("not empty");
  }
}

