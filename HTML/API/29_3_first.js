//API =>Application Programming Interface 

//URI //URI

//Ref ->API -> Response(JSON)=>Javascript Object Notation
                //                     |
                //                     |
                //     Return Promise---
                //     /     |
                // fetch()  axios()  |HTTP Request|
//                                         |      | Patch    ---
//                         (REad)     -    Get    | Delete     |   CRUD Operation
//                         (Update)   -    Post   |            |
//                         (Create)   -    Put    |          ---
// HTTP   STATUS   CODES
// --------------------
// 100    Information
// 200    Success    Ok
// 300    REdirectional
// 400    Client side error
// 500    server side error

var result=axios('https://jsonplaceholder.typicode.com/albums')//I am not mention by default get function print
console.log(result);
//cors => Cross origin resourse sharing
result.then((response)=>{
    console.log(response.data);
}).then((data)=>{
//     console.log(data);
    data.forEach(item => {
//        // console.log(item);
        for(let key in item)
        {
            console.log(`${key} : ${(item)[key]}`);
            document.getElementById('apiResponse').innerHTML+= `${key} : ${(item)[key]}`
        }
        document.getElementById('apiResponse').innerHTML+= ` <br/>  <hr> <br/>`
    });
})

let isReg = false;
let islogged=false;

//var myPromise = 
new Promise((resolve,reject)=>{
        if(!isReg && !islogged)
        {
            reject('Registration Pending...!');

        }
        else  if(isReg && !islogged)
        {

            reject('Login Pending');
        }
        else{
            resolve('Access Granted')
        }
    }).then((message)=>console.log(`Login in Suceess : ${message}`))
    //myPromise.then((message)=>console.log(`then executed : ${message}`))
    .catch((err)=>{console.log(`Rejected : ${err}`)})
    
