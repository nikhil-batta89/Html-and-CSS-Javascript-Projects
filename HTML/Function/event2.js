function Update()
{
  //  console.log("Typing...");
    let x = document.getElementsByClassName('ip');
    console.log(x);
    
}
//let collection=document.getElementsByClassName('ip');
let data;
let MyDiv=document.getElementsByClassName('ip');
for(let i=0;i<collection.length;i++)
{
  //collection[i].getElementsByClassName.border='2px solid green'
  collection[i].addEventListener('change',(event)=>
  {
    //console.log(event.target.id);
    //event.target.id=event.target.value;
    //document.getElementById('values').innerHTML+=`<p>${event.target.id} : ${event.target.value}</p>`
   // data+=`<p>${event.target.id} : ${event.target.value}</p>`
    MyDiv.innerHTML+=`<p>${event.target.id} : ${event.target.value}</p>`
    console.log();
  }) 
}
console.log(data);
let myButton = document.getElementsByTagName('button')[0];
myButton.addEventListener('click',()=>alert('Button Clicked'))

function fun(event)
{
  event.preventDefault()
 // console.log(event);
  MyDiv.style.display='block';
}
