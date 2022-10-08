window.addEventListener("DOMContentLoaded",showTime());

function showTime(){
    let date = new Date();
   //date.setTime(50000);
   let h = date.getHours();
   let m = date.getMinutes();
   let s = date.getSeconds();
   let session = "AM";

   if(h==0){
    h = 12;
   }

   if(h>12){
    h = h-12;
    session= "PM";
   }

   if(h<10) {
    h =  h;
   }

   if(m<10){
     m = "0" + m;
   }

   if(s<10){
    s = + s;
  }

 h = h <10 ? (h = "0" + h) : h;
 m = m <10 ? (m = "0" + m) : m;
 s = s <10 ? (s = "0" + s) : s;


 const time = h + ":" + m + ":" + s + "" + "|" + "" + session;
document.getElementById("DisplayClock").innerHTML = time;
setTimeout(showTime,1000);

}