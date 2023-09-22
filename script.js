const seconds=document.querySelector(".second .number");
minits=document.querySelector(".minit .number");
hours=document.querySelector(".hours .number");
days=document.querySelector(".days .number");

let sec1=37,
    min1=23,
    hour1=4,
    day1=11;

const timefunction=setInterval(()=>{
sec1--;
if(day1===0 && hour1 ===0 && min1===0 && sec1===0 ){
    clearInterval(timefunction)
}
if(sec1===0){
    min1--;
    sec1=60
}
if(min1===0){
    hour1--;
    min1=60
}
if(hour1===0){
    day1--;
    hour1=1
}
seconds.textContent=sec1 <10?`0${sec1}`:sec1;
minits.textContent=min1<10?`0${min1}`:min1;
hours.textContent=hour1<10?`0${hour1}`:hour1;
days.textContent=day1<10?`0${day1}`:day1;
},1000);   