/* A pure function in JavaScript is a function that always returns the same output when given the same inputs and produces zero side effects.

always returns the same output when given the same inputs and produces zero side effects. It operates entirely in isolation, relying only on the arguments passed to it and changing nothing in the outside application state.


Why Use Pure Functions?
Pure functions are a foundational concept in functional programming and form the backbone of modern libraries like React and Redux. They offer several distinct advantages:
• Predictability & Readability: They are incredibly easy to reason about because their logic is self-contained.
• Easier Testing: You do not need to set up complex mocks or environments. You simply pass inputs and assert the output.
• Memoization & Performance: Because the output is tied strictly to the input, you can safely cache (memoize) the results of expensive calculations.
• Concurrency: Since they do not share mutable state, they are completely safe from race conditions.
*/

// Always returns 5 for inputs 2 and 3
const add = (a, b) => a + b;

// // Output changes depending on the external variable
let tax = 0.05; //not arg fn but it affects the return value
const calculateTotal = (price) => price + price * tax;

// Output changes every time because it relies on the system time or a random generator
const getUniqueId = (name) => name + Math.random();

/**No Side Effects
 A pure function cannot modify any data outside of its own local scope. It must read its inputs as immutable (unchanging) data and return a completely new value rather than modifying the original
 
 Common side effects that make a function impure include:
• Mutating an input object or array directly.
• Modifying global or parent-scope variables.
• Making network requests (fetch or AJAX calls).
• Manipulating the DOM.
• Writing to the filesystem or printing to the console (console.log).
 
 */

// example
// Uses the spread syntax (...) to create and return a new array
const addNewUser = (userArray, newUser) => {
  return [...userArray, newUser];
};

// Mutates the original array passed into the function
const addNewUserImpure = (usersArray, newUser) => {
  usersArray.push(newUser);
  return usersArray;
};
