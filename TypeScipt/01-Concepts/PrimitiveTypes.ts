let user: string = "Shiva Subramaniyam S";
let age: number = 23;
let isActive: boolean = true;
let score: number[] = [1, 2, 3, 4];
let names: string[] = ["alice", "bob"];
// console.log(names);

// A tuple is a fixed-length array where each position has its own type:

let person: [string, number] = ["shiva", 23];

// An enum restricts a value to a fixed set of named options:

enum Color {
  Red,
  Green,
  Blue,
}

let favorite: Color = Color.Blue;
// console.log(favorite);

// any disables type checking for a value entirely, which quietly removes the safety TypeScript exists to provide. Prefer unknown when you genuinely don't know a value's type ahead of time; it still forces you to narrow the type before using it:
let userInput: unknown = "hello";
userInput = 100;
console.log(userInput);
