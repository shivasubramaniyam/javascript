/**In JavaScript, scope determines the accessibility (visibility) of variables and functions in different parts of your code. It dictates where you can use a variable and where it remains hidden. */

/**1. Global ScopeAny variable - declared outside of any function or block belongs to the global scope. */

// const globalVar = "I am everywhere";

// function test() {
//   console.log(globalVar);
// }

// 2. Module Scope - When working with JavaScript Modules (type="module"), variables declared at the top level are restricted to that specific file.
// Accessibility: Only accessible within that file, unless explicitly exported and imported into another file

/**3. Function (Local) Scope
 *
 *
 * Variables declared inside a function belong to that function's local scope.Accessibility: Only visible inside that specific function. You cannot access them from the outside.Variables declared with var, let, and const all respect function scope.
 */

// function sayHello() {
//   var secret = "Hello!";
//   console.log(secret); // Works!
// }

// console.log(secret); //referenece error

/**4. Block Scope
 *
 *Introduced in ES6 (2015), block scope applies to any code written inside curly braces { }, such as if statements, for loops, or while loops.Crucial Rule: Only let and const obey block scope. Variables declared with var do not obey block scope and will "leak" outside the braces.
 */

// if (true) {
//   let blockSafe = "Hidden";
//   var leaked = "I escaped!";
// }

// console.log(leaked); // Logs: "I escaped!"
// console.log(blockSafe); // ReferenceError: blockSafe is not defined

/**4. Lexical scope is a fundamental concept in programming that determines the accessibility of variables and functions based on where they are defined in the source code. In simple terms, lexical scope is the scope of a variable or function determined at compile time by its physical location in the code. Unlike dynamic scope, which depends on how functions are called at runtime, lexical scope is static and remains the same throughout the program's execution */

// const outerVar = "Outer";
// Level1();
// {
//   const innerVar = "Inner";

//   function Level2() {
//     // Level2 can see both because it travels up the chain
//     console.log(innerVar); // "Inner"
//     console.log(outerVar); // "Outer"
//   }
// }
