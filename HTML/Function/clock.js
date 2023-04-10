let tz = 'am'
let x = new Date();

let hours = x.getHours();
let mins = x.getMinutes()
let sec = x.getSeconds();
document.getElementById('liveClock').innerHTML =`<i>${hours} : ${mins} : ${sec} ${tz}</i>`;

let clock = setInterval(()=>{
    sec+=1;
    if(sec>60){
        sec=1;
        mins+=1;
    }
    if(mins>60){
        mins=1;
        hours+=1;
    }
    if(hours>24){
        hours=1;
    }
    if(hours>=12){
        tz='pm'
    }
    else{
        tz='am'
    }
    let print = `${hours} : ${mins} : ${sec} ${tz}`;
    document.getElementById('liveClock').innerHTML = `<i>${print}</i>`
    // console.log(`${hours} : ${mins} : ${sec}`);
},1000)

