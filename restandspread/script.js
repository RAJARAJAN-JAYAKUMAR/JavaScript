// let x = 1
// let y = 2
// let z = 3


function sum(...x){
    let total = 0
    for(let i of x){
        total = total + i
    }
    return total
}

console.log(sum(1,2,4,5,6,7,4,6)        );