/*
Keys and strings must be enclosed in double quotes.
Object keys are strings and must be unique within the object.
Commas separate elements in objects and arrays, but there is no comma after the last element.
JSON is case-sensitive.
White spaces (spaces, ta1bs, line breaks) are generally ignored but can be used to format the data for better human readability.

{
  "name": "John Doe",
  "age": 30,
  "isStudent": false,
  "address": {
    "city": "New York",
    "zipcode": "10001"
  },
  "hobbies": ["reading", "hiking"]
}
*/

let json1 = 'david'
let json2 = 4
let json3 = true
let json4 = [1,2,3,4]
let json5 = {
    "stock": 'tcs',
    "price": 200
}

//array of objects
let json6 = [
    {
        "stock": "tcs",
        "Price": 3500
    },
    {
        "stock": "hul",
        "Price":2500
    },
    {
        "stock": "SBI",
        "Price":2500
    },
]
console.log(json6); // it returns the array

let json7 = `[
    {
        "stock": "tcs",
        "Price": 3500
    },
    {
        "stock": "hul",
        "Price":2500
    },
    {
        "stock": "SBI",
        "Price":2500
    }
]`
console.log(json7); // now it returns the json format in console

//to convert string to array of objects, use parse()

let parsed = JSON.parse(json7)
console.log(parsed);
console.log(parsed[0].Price); // returns the first index value in the array

//to convert data to json, use stringify
console.log(JSON.stringify(parsed)); //returns the json formated data


