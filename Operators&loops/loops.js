var loops = 10

for (let i = 0; i < loops; i++) {
    console.log(i);
}

var arr = new Array(1,2,3,4)

console.log('length of array',arr.length);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// While Loop
// let input = '';
// while(input == ''){
//     input = window.prompt('Enter your name: ');
// }
// console.log(input); //if i cancel, it'll show null so..

// let input2 = '';
// while(input2 == '' || input2 == null){
//     input2 = window.prompt('Enter your name: ');
// }
// console.log(input2);


//do while
let xe = 0
do{
    console.log("printing do while", xe);
    xe+=1
}while(xe <= 10)

let symbol = window.prompt('Enter symbol:');
console.log(typeof symbol);
let rows = parseInt(window.prompt('enter rows'))
console.log(typeof rows);
let column = window.prompt('Enter column:');

for(let w=0; w<=rows; w++){
    console.log(w);
    // document.getElementById("loops").innerHTML = symbol
}

