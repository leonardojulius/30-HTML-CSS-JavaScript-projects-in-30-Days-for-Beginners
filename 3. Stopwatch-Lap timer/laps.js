window.onload=function(){
     const minutes = document.getElementById("minutes");
     const tens = document.getElementById("tens");
     const seconds = document.getElementById("seconds");

     const startBtn = document.getElementById("start-btn");
     const stopBtn = document.getElementById("stop-btn");
     const resetBtn = document.getElementById("reset-btn");
     console.log(minutes, tens,seconds);
     console.log(startBtn, stopBtn, resetBtn);

     let minutesSet = 00;
     let secondsSet = 00;
     let tensSet = 00;
     let Interval;

     startBtn.onclick = function (){
        clearInterval(Interval)
        Interval = setInterval(startTimer, 10);
     };

 // Create Start Timer function
 
 function startTimer(){
    tensSet++;
    // console.log(tens++);

    if(tensSet<9){
        tens.innerHTML = "0" + tens;
    }

    if(tensSet>9) tens.innerHTML = tensSet;
    }

    if(tensSet>99){
        secondsSet ++;
        seconds.innerHTML="0" + secondsSet;
        tensSet = 0;
        tens.innerHTML = "0" + 0;
    }

    if(secondsSet>9) {
        seconds.innerHTML = secondsSet
    }
    if(secondsSet == 60){
        minutesSet++;
        minutes.innerHTML = "0" + minutesSet;
        secondsSet = 0;
    }
    if(minutesSet >9) {
        minutes.innerHTML = minutesSet;
    }

}