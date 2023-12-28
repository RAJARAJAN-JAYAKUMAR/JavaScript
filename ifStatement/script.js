// let age = 23, hasLicense = false;

// if(age >= 18 && hasLicense){
//     console.log("you have you license");
// }
// else{
//     console.log("you must be havn a license");
// }

let user_input = "Chennai"
let city 
switch(user_input){
    case 'Bengaluru':
        city = 'benagaluru'
        break
    case 'Chennai':
        city = 'chennai'
        break
}


let text = `the ${city}`
document.getElementById("myPara").innerHTML = text
console.log(text)

let inp1 = "raja"
let inp2 = 2

console.log(answer = check(inp1,inp2));
function check(inp1,inp2){
    return typeof inp1 === typeof inp2 ? "yes" : "no"
}

