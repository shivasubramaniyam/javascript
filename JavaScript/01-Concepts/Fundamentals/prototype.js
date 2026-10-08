/**In JavaScript, prototypes are the mechanism by which objects inherit properties and methods from one another 
 * 
 * 
How Prototypes Work

Every JavaScript object has an internal, hidden link to another object, referred to as its [[Prototype]].
When you try to access a property or call a method on an object, JavaScript follows a specific lookup process known as the prototype chain:
1. It first looks directly at the object itself.
2. If it cannot find the property, it looks at the object's prototype.
3. It moves up the chain of prototypes until it either finds the property or encounters null (which signifies the absolute end of the chain, usually right above Object.prototype). If it reaches the end without finding it, it returns undefined.



.prototype vs .__proto__

A very common point of confusion is the difference between these two properties:
Property	Who has it?	Purpose
prototype	Only Constructor Functions or Classes	A blueprint property used to dictate what [[Prototype]] will be assigned to any new instances created by that function.
__proto__	Every Object Instance	An object's live, internal pointer that links directly to its parent prototype. (Note: __proto__ is legacy. In modern code, use Object.getPrototypeOf() or Object.setPrototypeOf()).


*/

// 1. Constructor function defining instance-specific properties
function Hero(name, role) {
  this.name = name;
  this.role = role;
}

// 2. Adding a shared method to the prototype
Hero.prototype.greet = function () {
  return `I am ${this.name}, protector of the realm!`;
};

// 3. Creating instances
const hero1 = new Hero("Arthur", "knight");
const hero1 = new Hero("Merlin", "Mage");

// Both instances can look up and use the exact same function in memory
console.log(hero1.greet()); // "I am Arthur, protector of the realm!"
console.log(hero2.greet()); // "I am Merlin, protector of the realm!"

// Verifying the prototype chain connection
console.log(Object.getPrototypeOf(hero1) === Hero.prototype); // true
console.log(Object.getPrototypeOf(Hero.prototype) === Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype)); // null (End of chain)
