function addition(a,b)
{
    console.log('Addition function called..');
    let sum=a+b;
    setTimeout(()=>{
        console.log(sum);
        sub(sum);
        console.log('Addition done..');
    },2000)
    //sub(sum);

}
function sub(x)
{
    console.log('Substraction function called...');
    console.log(100-x);
    console.log('Substraction Done...');
}
addition(5,9);