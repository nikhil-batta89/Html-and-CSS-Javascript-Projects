//CallBack

// function a(x)
// {
//     return x+1;
// }

// function b(y)
// {
//     return a(y+1);
// }
// function c(z)
// {
//     return b(z+1);
// }
// console.log(c(3));


//CallBack Queue

// function a(func)
// {
//     setTimeout(()=>
//     {
//         console.log('a');
//         func();
//     },5000)
// }

// function b()
// {
//     setTimeout(()=>console.log('b'),2000)
// }

// a(b);
//b();
//b
//a
//console.log();


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
//Call back hill
function Task1()
{
    setTimeout(()=>
    {
        console.log('Task1 exected after 1s..');
        setTimeout(()=>
        {
            console.log('Task2 exected after 5s..');
            setTimeout(()=>
            {
                console.log('Task3 exected after 0s...');
                setTimeout(()=>
                {
                    console.log('Task4 exected after 2s..');
                    setTimeout(()=>
                    {
                        console.log('Task5 exected after 0s..');
                    },0)
                },2000)            
            },0)
        },5000)
    },1000)
}
Task1();
//call stack function call hota jayaga