// var user;
// var storedUser;

// document.getElementById("btn").onclick = function(){
//     user = document.getElementById("tex").value
//     console.log(user)
// };

let stringV = '  aab,cdefg ffff  '
console.log(typeof stringV)

console.log(stringV.toUpperCase()) //return length of the string in number
console.log(typeof stringV.toUpperCase()) //return length of the string in number

console.log(stringV.toLowerCase()) //return length of the string in number
console.log(typeof stringV.toLowerCase()) //return length of the string in number

console.log(stringV.length) //return length of the string in number

console.log(stringV.indexOf('c'))
console.log(typeof stringV.indexOf('c'))

console.log(stringV.lastIndexOf('a')) //return the last occurance
console.log(typeof stringV.lastIndexOf('a')) //return the last occurance

console.log(stringV.slice(0,3)) 
console.log(typeof stringV.slice(0,3)) 

console.log(stringV.replace('aab',123))
console.log(typeof stringV.replace('aab',123))

console.log(stringV.concat(' ','concat'))
console.log(typeof stringV.concat(' ','concat'))

console.log(stringV.charAt(9)) //returns the character of a gn index
console.log(typeof stringV.charAt(9)) //returns the character of a gn index

console.log(stringV.split('')) //returns a array and type of object
console.log(typeof stringV.split(',')) 

console.log(stringV.charCodeAt(2)); //returns the character code of the character

console.log(stringV.trim()); //return newstring with leading and trailing white spaces removed
