/**JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code. */

// 1. variable hositing

// Hoisted behaviour
// temporal Death zone

// console.log(x);
// var x = 10;  // function scoped
// console.log(y); // let/const is in the temporal dead zone, but var is not in TDZ
// let y = 10; // block scoped

// Re-assignment

// var age = 10;
// var age = 20; //redeclaration will work in var

// let age = 10;
// let age = 20; //redeclaration will not work in let and const
// age = 25; //reassigning will works

// interview question
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }

// const x = 1;
// {
//   console.log(x); // ReferenceError
//   const x = 2;
// }

// console.log(x === undefined); // true
// var x = 3;

// (function () {
//   console.log(x); // undefined
//   var x = "local value";
// })();

/** 2.function hoisting */

// console.log(square(5)); // 25

// function square(n) {
//   return n * n;
// }

/**This code runs without any error, despite the square() function being called before it's declared. This is because the JavaScript interpreter hoists the entire function declaration to the top of the current scope, so the code above is equivalent to:
 *
 function square(n) {
   return n * n;
 }
 
 console.log(square(5)); // 25
 */

/*Function hoisting only works with function declarations — not with function expressions. The following code will not work: */

// console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
// const square = function (n) {
//   return n * n;
// };

/* 3. Class declaration hoisting */
/**Unlike function declarations, class declarations are not hoisted (or, in some interpretations, hoisted but with the temporal dead zone restriction), which means you cannot use a class before it is declared. */

// new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization

// class MyClass {}

// const MyClass = class MyClassLongerName {
//   // Class body. Here MyClass and MyClassLongerName point to the same class.
// };
// new MyClassLongerName();

/** 4. Import declarations are hoisted */

/**Import declarations are hoisted. In this case, it means that the imported values are available in the module's code even before the place that declares them, and that the imported module's side effects are produced before the rest of the module's code starts running. */

// const myCanvas = new Canvas("myCanvas", document.body, 480, 320);
// myCanvas.create();
// import { Canvas } from "./modules/canvas.js";
// myCanvas.createReportList();
