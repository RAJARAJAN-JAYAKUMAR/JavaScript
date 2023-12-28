function fn(){
    return 'hello'
}
console.log(fn()); // 'hello

//using async 

async function fn(){
    return 'raja'
}
console.log(fn()); //returns a promise

fn().then((msg) => console.log(msg)) // 'raja
/*how this happens without resolve method. Actually, it happens bts when using 'async' before function name it 
creates a resolve and reject method without explicitly. so, resolve method which is created takes the 'raja' parameter , and then function logs the output */

//without using then

let reachA = new Promise((resolve, reject)=>{
    const reached = true
    if(reached){
        setTimeout(resolve,6000,'vidhya has reached')
    } 
    else{
        reject('vidhya not reached')
    }
})

async function statusVidya(){
    console.log('hi');
 //passing reachA promise here it'll wait
    console.log(await reachA);
    console.log('process ended');
}

statusVidya()

//usign try and catch 
//it throws error message if condition is false, so useing try and catch to return the falsy message

let reachB = new Promise((resolve, reject)=>{
    const reached = false // its false here, so it returns an error not a reject message
    if(reached){
        setTimeout(resolve,5000,'Ramya has reached')
    } 
    else{
        reject('Ramya not reached')
    }
})

async function statusRamya(){
    try{
    console.log('hi');
    result = await reachB    //passing reachA promise here it'll wait
    console.log(result);
    console.log('process ended');
    }catch(error){
        console.log(error);
    }
}

statusRamya()