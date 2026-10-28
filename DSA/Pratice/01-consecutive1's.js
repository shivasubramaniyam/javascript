/** get the count of the consecutive ones in the array
 * if it encounters a break in the consecutive ones it will break the code
 */

function ConsecutiveOnes(arr) {
  const n = arr.length;
  let i = 0,
    maxCount = 0,
    count = 0;

  while (i < n) {
    if (arr[i++] === 1) {
      count++;
      maxCount = Math.max(maxCount, count);
    } else {
      count = 0;
    }
  }
  return maxCount;
}

const input = [1, 2, 1, 1, 2, 1, 1, 1];
console.log(ConsecutiveOnes(input));
