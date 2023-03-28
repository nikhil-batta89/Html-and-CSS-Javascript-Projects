/*function a()
{
console.log('a');
}
setTimeout(()=>{
    console.log("Timeout delay of 3 seconds is called");
},3000)




function a()
{
console.log('a');

setTimeout(()=>{
    console.log("Timeout delay of 3 seconds is called");
},3000);
}

function b()
{
console.log('b');

setTimeout(()=>{
    console.log("Timeout delay of 5 seconds is called");
},5000);
}
b();
a();
*/

/*function a()
{
console.log('a');

setTimeout(()=>{
    console.log("Timeout delay of 3 seconds is called");
},3000);
}

function b()
{
console.log('b');

setInterval(()=>{
    console.log("Timeout delay of 5 seconds is called");
},5000);
}
b();
a();
*/
function b()
{
console.log('b');

let x=setInterval(()=>{
    console.log("Timeout delay of 5 seconds is called");
},5000);
   // setTimeout(()=>clearTimeout(x),10000)
    setTimeout(()=>{clearInterval(x); console.log('Cleared Interval');},10000)
}

b();

//Javascript asynchronises -(shedulling , promisses,callback)
//Javascript synchronises - interpreter use execution program  