let arr = [1,2,3,4]
let arr2 = [5,6,7,8]
const person = {fname:"John", lname:"Doe", age:25};
let cars = ["BMW", "Volvo", "Mini"];

/* for loop

for(initialization; condition; iteration) {
  code block to be executed
}
*/

for(let i=0;i<=10;i++){
    console.log(i);
}

/* for/in loop

for (key in object) {
  code block to be executed
}   
*/

for (let x in person){
    console.log(x); //returns keys only
}


for(let x in person){
    console.log(x,person[x]); //returns the value of the key
}

for(let x in arr){
    console.log(x); //returns only index value
}

for(let x in arr){
    console.log(x[0]); //returns elements of the array
}

/* For/Of Loop
The JavaScript for of statement loops through the values of an iterable object.
It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

for (variable of iterable) {
  code block to be executed
}

*/

for (let x of cars) {
    console.log(x); //returns the values of the array
  }