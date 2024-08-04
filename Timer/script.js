let start = document.getElementById("start");
let restart = document.getElementById("restart");
let count = document.getElementById("count");
let listener;
let second = 0;
let minute = 0;
let hour = 0;
start.addEventListener("click",()=>{
    if(start.value=="Start"){
        listener = setInterval(timeStart,1000);
        start.value="Pause";
    }
    else{
        clearInterval(listener);
        start.value="Start";
    }
});
restart.addEventListener("click",()=>{
    clearInterval(listener);
    start.value="Start";
    second=0;
    hour=0;
    minute=0;
    count.textContent=`${String(hour).padStart(2,'0')}:${String(minute).padStart(2,'0')}:${String(second).padStart(2,'0')}`;
});
function timeStart(){
    second++;
    if(second==60){
        minute++;
        second=0;
        if(minute==60){
            hour++;
            minute=0;
        }
    }
    count.textContent=`${String(hour).padStart(2,'0')}:${String(minute).padStart(2,'0')}:${String(second).padStart(2,'0')}`;
}