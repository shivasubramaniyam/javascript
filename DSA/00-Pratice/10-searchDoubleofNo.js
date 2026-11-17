/** searching the element in the array whose double exists in the code
 *
 * let input = [10,2,5,3] output = true
 * approach :
 * set the value to false
 * traverse through all the element by => 2 for loops
 * check if i!=j and double the no logic is applied
 * set the value to true
 *
 *
 *
 */

function SearchItsDouble(a) {
  const n = a.length;
  let value = false;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j && a[i] === a[j] * a[j + 1]) {
        return true;
      }
    }
  }
  return false;
}

let input = [10, 2, 5, 3];
console.log(SearchItsDouble(input));
