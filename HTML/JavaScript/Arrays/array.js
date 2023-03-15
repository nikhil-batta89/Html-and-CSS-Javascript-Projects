var arr = [18,2,26,78,34,89,49,20,100];
//document.write(arr);
document.write(arr.length);

//arr.forEach( element => {
  //  console.log(element);
//});

arr.forEach( (i) => { //i element index value store ha
    console.log(i);
});
for (let i of arr)
{
    console.log(arr[i]);
}


