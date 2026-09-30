// Typing an object inline gets messy fast, so interface exists to name a shape once and reuse it:
interface User {
  name: string;
  age: number;
  email?: string; // optional
  readonly id: number;
}

const user1: User = { id: 1, age: 24, name: "shiva" };

// user1.id = 3;

// Interfaces can include methods too:

interface Product {
  name: string;
  price: number;
  getDiscount(percent: number): number;
}

// type can describe the same object shapes, plus things interfaces can't express, like a union of primitives:

type ID = string | number;

const userId: ID = "abc123";
const productId: ID = 42;

/**Interfaces vs. types, the two differences that actually matter day to day:

Interfaces can be extended; types can't be extended the same way (though types can use intersections to a similar effect).
Interfaces with the same name in the same scope merge automatically; redeclaring a type is a compile error. */

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const rex: Dog = { name: "Rex", breed: "Labrador" };

// In practice: reach for interface when describing the shape of an object, and type for unions, intersections, or anything that isn't a plain object shape.
