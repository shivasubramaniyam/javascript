// Day 1

// print the result -- string inside
// console.log("Shiva Subramaniyam S");
// console.log("Console logged succesfully ");

// assign a string value to name variable
// name = "Tony stark";
// console.log(name);

// dif datatype example
// let x = null;
// x = 10;
// console.log(x);

// y = undefined;
// y = 10;
// console.log(y);
// const age =28;
// let b;
// console.log(b);
// console.log(name);
// console.log(age);

// {
//   let a = 5;
//   console.log(a);
// }

// {
//   let a = 10;
//   console.log(a);
// }

/* there are two type of datatype :
    1) primitive datatype(7 type) i.e, Number, String, Boolean, Undefined,Null,Bigint,Symbol
    2) non primitive datatype(object) i.e, it is the collection of values..
    */

// // example of primitive datatype

// isFollow = true;
// let X = BigInt("1234");
// let y = Symbol("Hello!!!")

// // example of non primitive datatype

// object representaion
// const student = {
//   fullName: "Shiva Subramaniyam S",
//   age: 21,
//   cgpa: 8.2,
//   isPass: true,
// };
// // update the value of the one of the key
// student["age"] = student["age"] + 1;

// console.log(student);

//object to JSON
// const stud = JSON.stringify(student);
// const updateVal = (stud.age = 31);
// console.log(updateVal);
// console.log(typeof stud);
// console.log(student.age);

/*note :a) let can be updated ,
        b) const cannot be updated, 
        c) const object's key can be updated*/

// const product = {
//   name: "Parker pen",
//   rating: 4.7,
//   price: 270,
//   offer: 5,
//   color: "black",
// };
// product["name"] = "Shiva";
// console.log(product);

// const productJSON = JSON.stringify(product, null, 2);

// const updated = (productJSON.name = "sathya");
// console.log(updated);
// console.log(productJSON);
