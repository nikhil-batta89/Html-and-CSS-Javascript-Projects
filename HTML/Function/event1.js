var x=document.getElementById('heading2');
console.log(x);
x.style.color='cyan';
x.style.backgroundColor='orange';
x.style.display='inline-block';
console.log(document.getElementById("heading2").innerHTML);
console.log(document.getElementById("heading2").innerText);
//console.log(document.getElementById("heading2").innerHTML='Learning Js DOM');
//console.log(document.getElementById("heading2").innerText='<p>Learning Js DOM</p>');
console.log(document.getElementById("heading2").innerHTML='<p>Learning Js DOM</p>');

var img = document.getElementById('pict1');
var photo = true;
function hovering()
{
if(photo)
{
    img.src="https://th.bing.com/th/id/OIP.NbfPECA64xbFnmW58MbWDQHaEo?w=298&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7.jpg";
    photo=!photo
}
else
{
    img.src="https://th.bing.com/th/id/OIP.iSu2RcCcdm78xbxNDJMJSgHaEo?w=298&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7/.jpg";
    photo=!photo
}
}
/*
function hovering()
{
    document.getElementById('pict1').src="https://th.bing.com/th/id/OIP.NbfPECA64xbFnmW58MbWDQHaEo?w=298&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7.jpg"
}
function leaving()
{
    document.getElementById('pict1').src="https://th.bing.com/th/id/OIP.iSu2RcCcdm78xbxNDJMJSgHaEo?w=298&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7/.jpg"
}

*/

console.log(document.querySelector(''));