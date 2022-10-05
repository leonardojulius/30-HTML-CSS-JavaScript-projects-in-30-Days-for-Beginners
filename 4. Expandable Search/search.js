const searchBtn = document.getElementById("Search-btn");


const searhcInput = document.querySelector(".search-input");

console.log(searchBtn,searhcInput);

searchBtn.addEventListener('click',()=> {
    searhcInput.classList.toggle("active-search");
 
});

document.querySelector("main").addEventListener("click",()=>{
    searhcInput.classList.remove("active-search");
 
})