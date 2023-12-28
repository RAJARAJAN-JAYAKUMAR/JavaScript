console.log('-- script 1.js');

function first(x){
   return function second(y){
    console.log(x+y);
   }
}

let result = first(1)
console.log(result(2)); //3

function first1(x){
    let z = 20;
    return function second(y){
     console.log(x+y+z);   // lexical scoping, z value is taken here from parent
    }
 }
 
let result1 = first1(1)
console.log(result1(2));

function add(x){
    return function add(y){
        console.log(x+y);
    }

}

let add100  = add(100)
add100(20)
add100(100)

let add50 = add(50)
add50(100)
add50(200)
