let tatkalTicket = new Promise((resolve, reject) => {
    let bookingSuccess = 1
    if(bookingSuccess){
        resolve()
    }
    else{
        reject()
    }
})

function firstFunc(){
    console.log("thanks buddy");
}
function secondFunc(){
    console.log("Try again");
}

tatkalTicket.then(firstFunc).catch(secondFunc)

// using arrow function
tatkalTicket = new Promise((resolve, reject) => {
    let bookingSuccess = 1
    if(bookingSuccess){
        resolve(5) // i can give argument here
    }
    else{
        reject()
    }
})

tatkalTicket
.then((arg) => {return arg})
.then((arg) => console.log(arg))
.catch(() =>console.log("failed"))


// Best practise using function

function tatkal(){ //here function returns the promise function
    return new Promise((resolve, reject) => {
        let bookingSuccess = 1
        if(bookingSuccess){
            resolve('see you then')
        }
        else{
            reject()
        }
    })
}
console.log(tatkal()); //returns the promise only
tatkal().then((arg) => console.log(`${arg}`)).catch(() =>console.log("failed"))


//both the above and below are same
new Promise((resolve, reject) => {
    let bookingSuccess = 1
    if(bookingSuccess){
        resolve('see you then')
    }
    else{
        reject()
    }
}).then((arg) => console.log(`${arg}`)).catch(() =>console.log("failed"))


new Promise(
    (resolve, reject) => {
       let reached = 0
       if(reached){
         resolve()
       }else{
        reject()
       }
       
    }
).then(()=>console.log('reached')).catch(()=>console.log('not reached'))

// static methods in promise
console.log( '-- static methods in promise');

let reachA = new Promise(function(resolve, reject){
    reached = true
    if(reached){
        setTimeout(resolve(),3000, 'vidhya reached')
    }
    else{
        reject('vidhya not reached')
    }
})

let reachB = new Promise(function(resolve, reject){
    reached = true
    if(reached){
        setTimeout(resolve(),3000, 'john reached')
    }
    else{
        reject(' not reached')
    }
})

let reachC = new Promise(function(resolve, reject){
    reached = true
    if(reached){
        setTimeout(resolve(),3000, ' reached')
    }
    else{
        reject(' not reached')
    }
})

reachA.then(function(arg){
    console.log(arg);
}).catch(function(arg){
    console.log(arg);
})
