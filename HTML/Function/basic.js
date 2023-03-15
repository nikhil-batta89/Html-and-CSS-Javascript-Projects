//Function -> Named, anonymous ,arrow
//Named functyions
//defining  afunction
/*var x=Number(prompt("Enter a first number = "));
var y=Number(prompt("Enter a Second number = "));
//defining a fuction
function addition(a,b=87) //arguments a,b
{
    alert(a+b);
}
addition(x,y);//parameters
addition(8,3);
addition(88);
addition(75,21);
*/
//Write a function to generate even number in given range
/*function even()
{
for(let i=x;i<=y;i++)
{
    if(i%2==0)
    {
        document.write("even no ="+i+"<br/>");
    }
}
even(2,9);
}

function even(x,a,b)
{
    for(let i=a;i<=b;i+=2){
    console.log(i);
}
even('odd',2,9)
}
*/
/*
//var check = function(x,a,b) anamoyous
function check(x,a,b){
    if(x==='even'){
        if(a%2===0){
            for(let i=a; i<=b; i+=2){
                console.log(i);
            }
        }
        else{
            a++;
            for(let i=a; i<=b; i+=2){
                console.log(i);
            }
        }
    }
    else{
        if(a%2===0){
            a++;
            for(let i=a; i<=b; i+=2){
                console.log(i);
            }
        }
        else{
            for(let i=a; i<=b; i+=2){
                console.log(i);
            }
        }

    }
}
check('odd',2,9);
check('even',89,150);

*/
/*
var myObj={
    name:'Nikhil',
    age:25,
    criteria:function(x){
        if(x>=18)
        {
            console.log('Eligible');
        }
        else{
            console.log('Under-age');
        }
    }

}
myObj.criteria(myObj.age);
myObj.criteria(14);

var myObj={
    name:'Nikhil',
    age:25,
    criteria:function(x){
        if(x>=18)
        {
            console.log('Eligible');
            return x;
        }
        else{
            console.log('Under-age');
            return x;
        }
    }

}
myObj.criteria(myObj.age);
myObj.criteria(14);

*/
//var arrowFu=()=>console.log('I am Arrow function');return 67;

//var anamoyousFun = function(){console.log('I am anonymous function+');} 
//Local and global scope
/*var myName='Nikhil';//global
var myage;
const printIt=()=>{
    console.log(myName);
    myage=53;//local
}
printIt();
console.log(myage);
*/
var myName='Nikhil';//global
var myage = 9;//let declare same use karte ha error aga 
const user='Guest';
const printIt=()=>{
    console.log(myName);
    let myage=53;//local
}
printIt();
console.log(myage);
var myage=20;
console.log(myage);

user ='agent';
console.log(user);

//var check = function(x,a,b)
//Write a function to generate prime number in given range
