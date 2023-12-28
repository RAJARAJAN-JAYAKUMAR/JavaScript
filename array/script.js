let dogs = ["bulldog","labrador"]
console.log(typeof dogs);

let cats = new Array('billy','chimmmy',1)
console.log(typeof cats);

for (let i = 0; i < dogs.length; i++) { //usual for loop
    console.log(dogs[i]);
}
for (let i = 0; i < cats.length; i++) { //usual for loop
    console.log(cats[i]);
}

console.log(dogs.toString()); //bulldog,labrador - comma separated string 
console.log(dogs.join('-')); //bulldog-labrador - return string
console.log(dogs.join('')); //bulldoglabrador - return string

//splice operator
//(index starting value, no of elements to remove, replacing elements, replacing elements,)
let arr = new Array(0,1,2,3,4,5)
console.log(typeof arr); //object

console.log(arr.splice(0,1,5));
console.log(arr); //mutable - update the existing value in the memory
// console.log(arr.splice());
// console.log(arr.splice());
// console.log(arr.splice());

//slicing
// slice(start indexed, end index)
let slice = [1,2,3,4,5]
slice