//DOM Elements

const loginPassword = document.getElementById("loginPassword");

const showPasswordIcon = document.querySelector("i.fa-eye");


showPasswordIcon.addEventListener('click', showPassword);

function showPassword() {
    console.log(loginPassword);

    if(loginPassword.type ==="password"){
        loginPassword.type ="text";
        showPasswordIcon.style.color = "red";
     
    }else {
        loginPassword.type ="password";
        showPasswordIcon.style.color = "#ddd";
        
    }

}
//console.log(showPasswordIcon)