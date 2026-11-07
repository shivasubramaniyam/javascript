/** valid mountain problem in an array
 *
 * input = [1, 2, 3, 4, 3, 2, 1]
 * output = true
 * it should increase and decrease accordingly at the end of the array
 */

function ValidMountainProblme(a) {
  const n = a.length;
  let i = 0;
  if (n < 3) {
    return false;
  }
  while (i + 1 < n && a[i] < a[i + 1]) i++;
  while (i === 0 || i === n - 1) return false;
  while (i < n && a[i] > a[i + 1]) i++;

  return i === n - 1;
}

console.log(ValidMountainProblme([1, 2, 3, 4, 3, 2, 1]));
