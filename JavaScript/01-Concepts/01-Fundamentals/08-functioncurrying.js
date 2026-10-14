/**Currying is a functional programming technique in JavaScript that transforms a function with multiple arguments into a nested series of functions, each taking a single argument. Instead of passing all arguments at once—like f(a, b, c)—you pass them sequentially—like f(a)(b)(c).
 *
 * It relies heavily on closures, which allow the inner functions to remember and access variables from the outer functions' scope even after those outer functions have completed execution
 *
 * Regular Function vs. Curried Function
 */

function curriedAdd(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}
// console.log(curriedAdd(1)(2)(3));

function add(a, b, c) {
  return a + b + c;
}
// console.log(add(1, 2, 3));

// arrow fn

const arrowAdd = (a) => (b) => (c) => a + b + c;
// console.log(arrowAdd(10)(20)(30));
