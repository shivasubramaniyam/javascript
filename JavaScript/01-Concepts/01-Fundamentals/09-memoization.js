/*Memoization is an optimization technique used to speed up computer programs by storing the results of expensive function calls. When the function is called again with the same inputs, it simply returns the cached result instead of recalculating it. 


In JavaScript, memoization is powered by two core language features: Higher-Order Functions (functions that take or return other functions) and Closures (the ability of an inner function to remember the scope of its outer function).
*/

function memoize(fn) {
  // 1. Create a private cache inside the outer function's scope
  const cache = new Map();

  // 2. Return a new wrapper function
  return function (...args) {
    // 3. Generate a cache key from the arguments
    const key = JSON.stringify(args);

    // 4. Check if the result is already cached
    if (cache.has(key)) {
      console.log("Fetching from cache for:", args);
      return cache.get(key);
    }

    // 5. If not cached, compute, store, and return the result
    console.log("Calculating result for:", args);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

/**
 * Real-World Example: Fibonacci SequenceRecursive algorithms like the Fibonacci sequence have an exponential time complexity of \(O(2^n)\) because they constantly repeat calculations. Memoization drops this time complexity down to a linear O(n)
 */

// A standard, slow recursive Fibonacci function
function slowFib(n) {
  if (n <= 1) return n;
  return slowFib(n - 1) + slowFib(n - 2);
}

// Wrap it using our memoize utility
const fastFib = memoize(function (n) {
  if (n <= 1) return n;
  return fastFib(n - 1) + fastFib(n - 2);
});

console.log(fastFib(40)); // Calculates instantly!
console.log(fastFib(40)); // Fetched directly from the cache
