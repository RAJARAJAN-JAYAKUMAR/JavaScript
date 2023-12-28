try {
    num = prompt("enter a number")
    if(isNaN(num)){
        throw 'enter a valid number'
    }
    else if(num===''){
        throw 'Empty string not acceptable'
    }
    console.log(num**2)
} catch (error) {
    console.log(error) // throw messageah catch panni inga anupum
} finally{
    console.log('take care bye') //it runs eventually with error too
}