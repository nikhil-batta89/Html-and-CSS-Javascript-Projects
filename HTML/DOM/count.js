/*function a(){
    console.log('Countdown of 30 second begins....');
    var count = 30
    let x = setInterval(()=>{
            console.log(count);
            count--;
        },1000);
    setTimeout(()=>{
        clearTimeout(x);
        alert("Time's Up!!")
    },30000);
}

var a=(prompt("Enter the message = "));
var b=(prompt("Enter the delay  time"));
var  c=(prompt("Enter the time till the delay work"));

function Countdown()
{
    let x=setInterval(()=>{
        console.log(a);
    },b*1000);
    setTimeout(()=>{
        clearInterval(x);
        console.log("time up...");
    },c*1000);
}
Countdown();
// function b(){
//     console.log('b');
//     let x = setInterval(()=>{
//         console.log('Timeout delay of 5 seconds is called....');
//     },5000);

//     setTimeout(()=>{clearInterval(x); console.log('Cleared Interval');},10000)
// }
// b();
//a();
*/
//creating a clock

var x=new Date();
console.log(x);

//let date = x.getDate();
//let day = x.getDay();
let hours= x.getHours();
let min=x.getMinutes();
let seconds=x.getSeconds();
//console.log(date);
//console.log(day);
console.log(`${hours} : ${min} :${seconds}`);
document.getElementById('liveClock').innerHTML=`<i>${hours} : ${min} :${seconds}</i>`;
let clock = setInterval(()=>{
    seconds+=1;
    if(min>60)
    {
        min=1;
        hours+=1;
    }
    if(seconds>60)
    {
        seconds=1
        min+=1;
    }
    if(hours>12)
    {
        hours=1;
    }
    let print=`${hours} : ${min} :${seconds}`;
    document.getElementById('liveClock').innerHTML=`<i>${print}</i>`;
    console.log(`${hours} : ${min} :${seconds}`);
},1000)
