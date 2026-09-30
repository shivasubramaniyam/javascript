// const student = {
//     fullName: "shivaSubramaniyamS",
//     marks:94.4,
//     printMarks: function(){
//         console.log("marks = ",this.marks);
        
//     }
// }

// const employee = { //the const variable employee is the object type  
//     calcTax() { //this is the function or a method inside the object
//         console.log("tax rate is 10%");
        
//     },
// };

// const karanArjun ={
//     salary:50000,
// };

// karanArjun.__proto__ = employee;

/*prototype 
a js object is an entity having state and behavior (properties and menthod),
js object have a special property called prototype. */

/*class is a program code template for creating object 
those object will have some state(variable) and some behavior(function) inside it
*/

//ex for classes and object
//  class ToyotaCar
//  {
//     start()
//     {
//         console.log("start");
        
//     }
//     stop()
//     {
//         console.log("stop");
        
//     }

//     setBrand(brand,mileage) 
//     {
//         this.brandName = brand;
//         this.mileage = mileage
//     }
//  }

// let fortuner = new ToyotaCar();
// fortuner.setBrand("fortuner",10);

// let lexus = new ToyotaCar();
// lexus.setBrand("lexus",12);


//inheritence example

// class Parent
// {
//     hello() 
//     {
//         console.log("hello");
        
//     }
// }

// class Child extends Parent {
// }

// let obj = new Child();


//ex2

// class Person
// {
//     constructor(name)
//     {
//         this.species = "homo sapiens";
//         this.name = name;
//     }


//     eat()
//     {
//         console.log("eat");
//     }

//     sleep()
//     {
//         console.log("sleep");       
//     }


// }


// class Engineer extends Person
// {
//     constructor(name)
//     {
//         super(name);
//     }

//     work()
//     {
//         super.eat();
//         console.log("solve problem, build somthing");
        
//     }
// }

// let shivaObj = new Engineer();


// let data = "secret information";
// class User
// {
//     constructor(name,email)
//     {
//         this.name = name;
//         this.email = email;
//     }
    
//     viewData(){
//         console.log(`the name of the person is ${this.name} and email address is ${this.email}`);
        
//     }
// }

// const obj = new User("shiva","sub@gmail.com");


// class Admin extends User
// {
//     editData()
//     {
//        data = "new data";
//     }
// }

// let obj2 = new Admin("admin","admin@gmiail.com"); 







//try catch example

let a = 5;
let b = 10;
try{
console.log("a = ",a);
console.log("b = ",b);
console.log("c = ",c);
console.log("a = ",a);

} catch(err){
    console.log(err);
    
}


