//toLocaleString - returns a string with a language sensitive representation of this number
//toLocalString(locale,{options})

let Num = 12345678890;
 
let myEng = Num.toLocaleString("en-US"); //us english
let myHin = Num.toLocaleString("hi-IN"); //Indian hindi
console.log(myEng);
console.log(myHin);

myEng = Num.toLocaleString("en-US", {style: "currency", currency : "usd"}); //us english
console.log(myEng);

Num = 100
let myNum2 = Num.toLocaleString(undefined, {style:"percent"})
console.log(myNum2);

const dateObject = new Date();

console.log(dateObject.toLocaleString("en-US"));
console.log(dateObject.toLocaleString("hi-IN"));







