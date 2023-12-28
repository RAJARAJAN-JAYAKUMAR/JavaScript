// number -> string, bool, object, array

console.log(1 + "q" ,'- ' + typeof (1 + "q")); // '1q' - string

console.log(1 + true ,'- ' + typeof (1 + true)); // 2 - number

console.log(1 + false ,'- ' + typeof (1 + false)); // 1 - number

console.log(1 + {} ,'- ' + typeof (1 + {})); // 1[object object] - string
console.log(1 + {"q": 1} ,'- ' + typeof (1 + {"q": 1})); // 1[object object] - string

console.log(1 + [] ,'- ' + typeof (1 + [])); // 1 - string
console.log(1 + [1,2] ,'- ' + typeof (1 + [1,2])); // 11,2 -string

//string -> number, bool, object, array

console.log('x' + 1 ,'- ' + typeof ("x" + 1)); // x1 - string

console.log('x' + true ,'- ' + typeof ("x" + true)); // xtrue - string
console.log('x' + false ,'- ' + typeof ("x" + false)); // xfalse - string

console.log('x' + [] ,'- ' + typeof ("x" + [])); // x - string
console.log('x' + [1,2] ,'- ' + typeof ("x" + [1,2])); // x1,2 - string

console.log('x' + {} ,'- ' + typeof ("x" +{} )); // x[object object] - string
console.log('x' + {"a":1} ,'- ' + typeof ("x" + {"a":1})); // x[object object] - string


//bool -> number, string, object, array

console.log(true + 1 ,'- ' + typeof (true + 1)); // 2 - number

console.log(true + "q" ,'- ' + typeof (true + "q")); // trueq - string

console.log(true + {} ,'- ' + typeof (true + {})); // true[object object] - string
console.log(true + {"x":1} ,'- ' + typeof (true + {"x":1})); // true[object object] - string

console.log(true + [] ,'- ' + typeof (true + [])); // true - string
console.log(true + [1,2] ,'- ' + typeof (true + [1,2])); // true1,2 - string


//array -> number, bool, string, object

console.log([] + true ,'- ' + typeof ([] + true)); // true - string
console.log([] + false ,'- ' + typeof ([] + false)); // false - string


if(""){
    console.log("non empty string is false");
}
if("q"){
    console.log("non empty string is truthy");
}

if ({}) {
    console.log("null");
}
if ({}) {
    console.log("null");
}

let x = true; y = {};

if(x == y){
    console.log("yes");
} else console.log("no");

