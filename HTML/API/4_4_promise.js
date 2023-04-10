function task1 (t2){
        setTimeout(async()=>{
            console.log(`Called task 1 for 1 second`);
            await t2(task3);
        },1000)
}
function task2 (task3){
    setTimeout(async()=>{
        console.log(`Called task 2 for 2 seconds`);
        await task3(task4);
    },2000)
}
function task3 (task4){
    setTimeout(async()=>{
        console.log(`Called task 3 for 3 seconds`);
        await task4()
    },3000)
}
function task4 (){
    setTimeout(()=>{
        console.log(`Called task 4 for 4 seconds`);
    },4000)
}

task1(task2)


var result = fetch('https://jsonplaceholder.typicode.com/todos',{
    method:"GET",
    headers:{
        "content-type":"application/json"
    }
})
console.log(result);

result.then((response)=>{
    return(response.json())
})
.then((data)=>{
    console.log(data);
})


    var x = Math.floor(Math.random()*data.length)
    console.log(data[x]);

    data.forEach((item)=>{
        for(key in item){
            console.log(`${key} :  ${(item)[key]}`);

            document.getElementById('apiResponse').innerHTML += `${key} :  ${(item)[key]} <br/>`
    }
    document.getElementById('apiResponse').innerHTML +=`<br/><br/>`
    })




function promiseHell(time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Called promise for ${time/1000} seconds`);
            resolve();
        },time)
    })
}

async function exec(){
    try {
        await promiseHell(5000);
        await promiseHell(4000);
        await promiseHell(3000);
        await promiseHell(2000);
    } catch (error) {
    console.log(`Error : ${error}`); 
    }
}
exec();



async function apiFetch(){
    var result = await axios('https://jsonplaceholder.typicode.com/todos',{
        method:"GET",
        headers:{
            "content-type":"application/json"
        }
    })
    try {
        let response = result
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
    }
    apiFetch();
    