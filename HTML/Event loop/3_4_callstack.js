// const funct1=()=>
// {
//     console.log('Function 1 started for 5sec ');
//     setTimeout(()=>{
//         funct2();
        
//     },5000)
// }

// const funct2=()=>
// {
//     console.log('Function 2 started for 2sec ');
//     setTimeout(()=>{
//         console.log('Function 2 completed ');
//         console.log('Function 1 completed ');
//     },2000)
// }
// funct1();

//callback hell
const funct1=()=>
{
    console.log('called task 1  for 5sec ');
    setTimeout(()=>{
        console.log('called task 2 for 2 sec');
        setTimeout(()=>{
            console.log('called task 3 for 3 sec');
            setTimeout(()=>{
                console.log('called task 4 for 4 sec');
                setTimeout(()=>{
                    console.log(' tast 4 executed');
                    console.log(' tast 3 executed');
                    console.log(' tast 2 executed');
                    console.log(' tast 1 executed'); 
                },4000)
            },3000)
        },2000)
    },5000)
}
funct1();