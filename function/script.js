'use strict';
let expression, arrowFunction, mapping, newMapping, reducing, newReducing, arr, newFilter, answer, arr2d, array2d;

console.log("- function");
function a(x,y){
    console.log(x+y);
}
a(1,2)

//function expression
console.log("- function expression");

expression = function(x,y){
    console.log(x+y);
}
expression(3,5) // can use the variable as a function

//function expression la parameter kudukamalae values access panalam. argumentnu command use panni 
expression = function(){
    console.log(arguments);
    console.log(typeof arguments); //array object
}
expression(1,2,3,4)

//arrowfunction
console.log("- arrowfunction");

arrowFunction = (x,y) => {
    console.log(x+y);
}
arrowFunction(5,8)

arrowFunction = x => console.log("x")
arrowFunction('raja')

// callback function
console.log("- callback");

function dis(){
    console.log("dis func callback");
}

function sum(callback){ 
    callback() // dis()
}

sum(dis)

arr = ['raja','ram','siva']

arr.forEach(printValues) //foreach send the elements to the function inside

function printValues(val){
    console.log(val.toUpperCase())
} 
 
// to change the original array elements
arr.forEach(updateValues)

function updateValues(value, index, array){
    arr[index] = value.toUpperCase()
    console.log(arr); //its like a for loop
}

//using arrow function for callback
arr= [1,2,3,4]
console.log(arr);

arr.forEach((value,index, array)=> {
    arr[index] = Math.pow(value,2)
})


//mapping
console.log('- mapping');

mapping = [1,2,3,4]
newMapping = mapping.map(function(element){
    return element * 2
})
console.log(mapping);
console.log(newMapping);


// reducing
console.log('- reduce');

reducing = [9,8,7,6,5]
// newReducing = reducing.reduce((accumulator, element) =>{
//    return accumulator + element
// });
newReducing = reducing.reduce((accumulator, element) => accumulator + element);
console.log(reducing);
console.log('reduced array ' , newReducing);

reducing = [9,8,7,6,5,34]
newReducing = reducing.reduce((total, elements) => total+elements, 1000)
console.log(newReducing);

// filter
console.log('- filter');

newFilter = [21,23,53,34,112,5,454,2] 
answer = newFilter.filter( x => x> 50) //it filters the array and returns the value to a new array 
console.log(answer);


//generators
console.log("generators");

function* numberGenerator(){
    let index = 1
    while(true){
        yield index++
    }
}

let newGen = numberGenerator();
console.log(newGen.next().value); //return 1
console.log(newGen.next().value); //returns 2
 
//flat 
console.log("flat method and reduce metho");
arr2d = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

array2d = arr2d.flat() //flat method list all the elements in 1d array


let array1 = [1,2,3,4]
let array2 = array1.reduce(reduceFunction(total, elements){
    total = total +elements
})
console.log(array2);
