/**Destructuring assignment is a JavaScript syntax introduced in ES6 that allows you to unpack values from arrays, or properties from objects, into distinct variables in a concise way. It does not modify the original array or object
 *
 */

//* 1. Array destructuring assigns values to variables based on their index position.

const color = ["red", "green", "blue"];
// Basic assignment
const [first, second, third] = color;
console.log(first);

// Skipping values using extra commas
const [primary, , tertiary] = color;
console.log(tertiary);

// Using the Rest operator (...) to collect remaining elements

const [main, ...other] = color;
console.log(other);

// Default values (used if the element is undefined)
const [a, b, c, d = "yellow"] = color;

console.log(a, b, c, d); // "yellow"

// 2. Object Destructuring --> Object destructuring extracts values by matching property keys, meaning the order of variables does not matter

const user = { id: 101, name: "Alice", role: "Admin" };

// Basic assignment (variable names must match key names)
const { name, role } = user;
console.log(name);

// Assigning to a new variable name (aliasing)
const { id: userId, name: userName } = user;
console.log(userId); // 101

//default value

const { name: name1, status = "Active" } = user;
console.log(status);

const { id, ...restofuser } = user;
console.log(restofuser);

// variable swap
let a1 = 1,
  b1 = 2;
[a1, b1] = [b1, a1];
console.log(a1, b1);

// Nested Destructuring
const profile = {
  username: "coder21",
  metadata: {
    created: "2024",
    hobbies: ["moreofmoney", "financialfreedom", "healthy", "sucess and happy"],
  },
};

const {
  metadata: {
    created,
    hobbies: [firstHobby],
  },
} = profile;

console.log(created);
console.log(firstHobby);

// Function Parameter Destructuring

function displayUser({ user, name }) {
  console.log(`${name} is an ${role}`);
}

const person = { name: "Bob", role: "Editor" };
displayUser(person);
