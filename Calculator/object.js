var myObject = {
    fname:'Pika',
    Lname:'Chu',
function :fullname()
    {
        return;
    }
}
console.log(myObject.fullname());
function printing(game,time)
{
    let x =`${this.fullname()} loves to play ${game} in the ${time}`
    console.log(x);
}
//Binds function
//1.Binds a function with another  function or another object
//2.Return a function  without executing  it at same time.

//Call function
//1.Binds a function with another  function or another object
//2.Executing function  at same time.
printing.call(myObject,'football','morning');// call function call nahi karta execute kar ta
printing.apply(myObject,['chess','evening']);

//Apply function
//1.Binds a function with another  function or another object
//2.Executing function  at same time.
//3.all parameter are passed in an array