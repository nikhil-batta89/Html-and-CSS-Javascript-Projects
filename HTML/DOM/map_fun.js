/*let arr=[45,63,22];


let a=arr.map((value,index)=>
{
    console.log(value,index);
    return value + index;
})

console.log(a);

var arr = [1,2,3,4,5,6];
var newArr=[];
arr.forEach(index=>{
    newArr.push(index * 2);
    return newArr;
}) 
console.log(arr);
console.log(newArr);

var arr = [1,2,3,4,5,6];
let a =arr.map(function(item)
{
    
    return item*2;
})
console.log(arr);
console.log(a);
//arternative method by defining arrow function outside map function 
function demo(item)
{
    return item*2;
}
const demo=(item)=>item*2;
let newArr2 = arr.map(demo)
console.log(newArr2);

/*
let arr =[42,23,21,10,3,52]
let a = arr.filter((a)=>
{
    return a<10
})
console.log(arr);
console.log(a);


var arr = [1,2,3,4,5,6];
let newArr=arr.filter((item)=>
{
    if(item%2 === 0)
    {
        return item;
    }
})
console.log(arr);
console.log(newArr);

var arr = [1,2,3,4,5,6];
let newArr=arr.reduce((item1,item2)=>
{
    return item1 +item2;  
})
console.log(arr);
console.log(newArr);
*/

//var arr = [1,'2',3,4,'5',6];
/*
var arr = [1,2,3,4,5,6];
let newArr=arr.reduce(demo,10);
function demo(item1 ,item2)
{
    // console.log(item1);
    // console.log(item2);
    // console.log(item1 + item2);
   // return item1 + item2;
    return item1 * item2;
    
}
console.log(newArr);
*/

var arr=['j','a','v','a','s','c','r','i','p','t'];
var vowels =['a','e','i','o','u'];
// arr.forEach((item)=>
// {
//     if(vowels.includes(item))
//     {
//         return item;
//     }
// })
// console.log();
var onlyvowles=arr.filter((item)=>{
    if(vowels.includes(item))
    {
        return item;
    }
})
console.log(onlyvowles);
//op1=javascript 
//op2=learn javascript
/*
let newArr1=arr.reduce((item1,item2)=>item1 + item2);
let newArr2=arr.reduce((item1,item2)=>item1 + item2,'Learn ');

let op3=arr.filter(vowlfilter);
function vowlfilter(item)
{
    if(item =='a' | item == 'e' | item== 'i' | item=='o' | item=='u')
    {
        return item;
    }
}
console.log(newArr1);
console.log(newArr2);
console.log(op3);
*/