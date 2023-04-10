// function Task1(func2)
// {
//     setTimeout(()=>
//     {
//         console.log('Task1 exected after 1s..');
//         func2();
//     },1000)
// }

// function Task2(func3)
// {
//     setTimeout(()=>
//     {console.log('Task2 exected after 5s..');;
//     func3();    
// },5000)
// }

// function Task3(func4)
// {
//     setTimeout(()=>
//     {
//         console.log('Task3 exected after 0s...');
//         func4();    
//     })
// }

// function Task4(func5)
// {
//     setTimeout(()=>
//     {
//         console.log('Task4 exected after 2s..');
//         func5();
//     },2000)

// }
// function Task5()
// {
//     setTimeout(()=>
//     {
//         console.log('Task5 exected after 0s..');
    
//     })
// }
// Task1(Task2);
// Task2(Task3);
// Task3(Task4);
// Task4(Task5);

//paramid of do
//Call back hill => call back to inner side to call back

// function Task1()
// {
//     setTimeout(()=>
//     {
//         console.log('Task1 exected after 1s..');
//         setTimeout(()=>
//         {
//             console.log('Task2 exected after 5s..');
//             setTimeout(()=>
//             {
//                 console.log('Task3 exected after 0s...');
//                 setTimeout(()=>
//                 {
//                     console.log('Task4 exected after 2s..');
//                     setTimeout(()=>
//                     {
//                         console.log('Task5 exected after 0s..');
//                     },0)
//                 },2000)            
//             },0)
//         },5000)
//     },1000)
// }
// Task1();


//Promises
//Promise(  object) ->Take a call back fun as arguments and this callback func have two parameters(resolve , reject) 
//     Priomise (object ->return a value) or promise      new promise ((resolve,reject)=>{ })
//     /
// Pending ...
// Resolve ...>then()
// reject ->Catch
//There are self invoke
// var age=22;
// var myPromise = new Promise((resolve,reject)=>{
//     if(age>=18)
//     {
//         resolve('Resolved: Eligible');
//     }
//     else{
//         reject('Rejected : Not Eligible');
//     }
// }).then((message)=>console.log(`then executed : ${message}`))
// //myPromise.then((message)=>console.log(`then executed : ${message}`))
// .catch((err)=>{console.log(`catch executed : ${err}`)})

// function Task1(t2)
// {
//     setTimeout(()=>
//     {
//         console.log('Task1 exected after 1s..');
//         t2();
//     },1000)
// }
                                    
// Promise Chaning
function timer(time)
{
return new Promise((resolve)=>
{
    return setTimeout((time)=>
    {
        resolve()
        console.log('Resolved  Executed ');
    },time);
})
}
timer(3000).then(()=>
{
    console.log('TAsk1 executed ||');
    return  timer(2000)
})
.then(()=>{
    console.log('Task2 executed ..');
    return timer(5000)
})
.then(()=>
{
    console.log('Task 3 executed !!');
})
.catch(err=>console.log(err))

// var a=10;
// var b=20;
// var sum=0;
// var myPromise = new Promise((resolve,reject)=>{
//         sum=a+b;
//         if(sum == 30)
//         {  
            
//             resolve('Resolved: Eligible');
//         }
//         else
//         {
//             reject('Rejected : Not Eligible');
//         }
        
//     }).then((message)=>console.log(`then executed : ${message}`))
//     //myPromise.then((message)=>console.log(`then executed : ${message}`))
//     .catch((err)=>{console.log(`catch executed : ${err}`)})

// let i=parseInt(prompt('Enter yours years of experience..'))
// new Promise((resolve ,reject)=>{
//     if(i>5)
//     {
//         resolve(`you're hired`)
//     }
//     else
//     {
//         reject(`Better luck next time!`)
//     }
// }).then((message)=>{console.log(`then executed : ${message}`)})
// .catch((err)=>{console.log(`catch executed : ${err}`)})

// let a = parseInt(prompt("Enter a First number"))
// let b = parseInt(prompt("Enter a Second number"))
// let result =new Promise((resolve ,reject)=>
// {
//         let sum =a+b;
//         resolve(sum);
//         return sum;
// }).then((sum)=>
// {
//     setTimeout(()=>{
//             console.log(sum);
//             let sub=100-sum;
//             console.log(sub);
//             return sub;
//     },2000)
// }).catch((err)=>console.log(err))

