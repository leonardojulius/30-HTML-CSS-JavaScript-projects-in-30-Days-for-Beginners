const mainContent = document.querySelector("main");
const tabs=document.querySelectorAll(".btn");

const content = document.querySelectorAll(".content");

console.log(mainContent,tabs, content);

mainContent.onclick=(e)=> {

   
    const id =  e.target.dataset.id;

    if(id){
        tabs.forEach((tab) =>
            tab.classList.remove("active"));
      
        e.target.classList.add('active');
        content.forEach((content) =>{
            content.classList.remove("active");
        });
        const activeTab= document.getElementById(id);
        activeTab.classList.add("active");
    }
};