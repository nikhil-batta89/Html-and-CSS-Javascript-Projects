//Important Concepts Hosting for Interview

//Hosting -> defines the function and delare the variable on top-Level.
/*var x;
console.log(x);
x=10;

//not defined x variable decalre is not defined
//undefined  x variable define but value note assign

x=10;
console.log(x);
var x;


x=10;
console.log(x);
let x;

console.log(x);
var x=10;
var x='nikhil';

console.log(x);
var x=10;
let x='nikhil';

//let or constant declare ha nahi hoga declare

xyz();
function xyz()
{
    x=10;
    console.log('x');
}
var x;

xyz();
var x=10;
function xyz()
{
    var  x=20;
    console.log(x);
}
console.log(x);



xyz();
var x=10;
function xyz()
{
    x=20;
    console.log(x);
}
//console.log(x);
*/

//Closures => When a function is defined inside another function then parent func will not have aceess to child
//func properties , whereas vice versa is possible and that forms a closure  

// function parent()
// {
//     var x =10;
//     child();
    
//     function child()
//     {
//         //var x=50;
//         var y=45;
//         console.log(x);
//     } 
//     console.log(y);
// }
// parent();

// Higer order Function =>The func that either take a funcs as aarguments or rerturn a funs or both 
function parent()
{
    var x=10;
    return (function(){
        return x;
    });
}
console.log(parent()());