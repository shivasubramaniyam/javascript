// In JavaScript, a closure is the combination of a function bundled together with references to its surrounding state, known as the lexical environment.
// Put simply: a closure gives an inner function access to the outer function's scope even after the outer function has finished executing.

// Normally, when a function finishes running, all of its local variables are cleared from memory. However, if an inner function is returned or stored, JavaScript keeps those outer variables alive because the inner function still needs them

function makeGreeting(greetingWord) {
  // This outer function takes a parameter 'greetingWord'
  return function (name) {
    // The inner function remembers 'greetingWord' from its parent's scope
    console.log(`${greetingWord}, ${name}!`);
  };
}

// Create two separate closure environments
const sayHello = makeGreeting("Hello");
const sayBye = makeGreeting("Goodbye");

sayHello("Alice"); // Output: Hello, Alice!
sayBye("Bob"); // Output: Goodbye, Bob!
