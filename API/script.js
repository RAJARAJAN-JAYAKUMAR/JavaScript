let x = fetch('https://official-joke-api.appspot.com/jokes/programming/random');
console.log(x);
x.then((arg)=> console.log(arg))
x.then((result)=> console.log(result.json()))
// fetch('https://official-joke-api.appspot.com/jokes/programming/random')
// .then((result)=> )

