let user1 = {
    name:'Ramya',
    age:22,
    detail(){
        console.log('my name is', this.name); // this represent the object's key
    },
    login(){ 
        console.log('you are logged in');
    },
    logout(){
        console.log('you are logged out');
    }
}

//------------ Class

class User{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    detail(){
        console.log(`my name is ${this.name} and ${this.age}`);
    }
}
let obj1 = new User('raja',32)
obj1.detail()

//----------- wrapper class - primitive data type is a object how?

let x = 'rajarajan'
console.log(x.length); // in here it creates a wrapper class for the string

//----------- static method in class

class Company{
    constructor(name,age) {
        this.name = name
        this.age = age
    }
    displayDetail(){
        console.log(this.name, this.age);
    }
}

let cobj1 = new Company('raja',23)
cobj1.displayDetail()

class Company2{
    static count = 0;
    constructor(name,age) {
        this.name = name
        this.age = age
        Company2.count++ // here you should use class name with variable count to increase count
    }
    displayDetail(){
        console.log(this.name);
    }
    static displayMessage(){
        console.log('this is a class');
    }
}

let cobj2 = new Company2('ram',23)
let cobj3 = new Company2('shakira',23)
cobj2.displayDetail()
console.log(Company2.count);//2
Company2.displayMessage() // using static method to call function like math.sqrt()

//--------- Inhertiance
class Users{ //base class
    static Company = 'zoho'
    constructor(name, age){
        this.name = name
        this.age = age
    }
    displayName(){
        console.log(this.name);
    }
    login(){
        console.log('you are logged in');
    }
    static displayCompanyName(){
        console.log(Users.Company);
    }
}

//derived class, child class, subclass
class PaidUsers extends Users{
    // constructor(name, age) {
    //     this.name = name;
    //     this.age = age;
    // } this gives error cause base class wont allow so
    constructor(name,age) {
        super(name,age); // this send this arg to base class and  make initialization
        this.storage = 200
    }
    message(){
        console.log(`you have extra ${this.storage} gb storage`);
    }
}

let paiduser1 = new PaidUsers() //argument pass panamale object create pannalam
paiduser1.login()
paiduser1.displayName()//undefined nu varum because ni argument pass panala
paiduser1.message()