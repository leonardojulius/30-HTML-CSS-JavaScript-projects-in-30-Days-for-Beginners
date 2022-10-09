const menuToggle = document.querySelector("#menu-toggle");
const activeElements = document.querySelectorAll(".active-element");

menuToggle.addEventListener('click', function(){

    for(let active=0;active<activeElements.length;active++) {
        activeElements[active].classList.toggle("active");
    }

  //  console.log(menuToggle.childNodes[1]);

    const navBtnIcon = menuToggle.childNodes[1];
    navBtnIcon.classList.toggle("fa-times");


});