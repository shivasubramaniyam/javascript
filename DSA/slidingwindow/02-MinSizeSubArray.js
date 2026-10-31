// medium

/**input = [2,2,3,1,2,4,3] target=7
 * we need to find the minimum contiguous(think of sliding window approach) sub array whose sum is = target or more than target
 * initially minimum sub array length is 2 to form array
 * in the input array we have 2,2,3 => 7 and 4,3 => 7, we are gonna take the 4,3 as the length is minimum
 *
 * approach :
 * keep i and j in the start element , size=6, minLength = 6 , target =7, sum=0
 * we are gonna store the j value to the sum and move the j index sum+=j
 * if the sum > target, move i
 * if the sum < target, move j
 * if the sum >= target ,update the minLength and check weather smaller window is gettable in the code
 */

function minSum(input, target) {
  let i = 0,
    j = 0,
    sum = 0;
  const MAX = 99999;
  const n = input.length;
  let minLength = MAX;
  while (j < n) {
    sum += input[j];
    while (sum >= target) {
      minLength = Math.min(minLength, j - i + 1);
      sum -= input[i]; //if we are moving the i value we need to remove the i'th element and then increment
      i++;
    }
    //default all the element whose whose sum is less than target, it will come to this section
    j++;
  }
  return minLength === MAX ? 0 : minLength;
}

const input = [2, 2, 3, 1, 2, 4, 3];
const target = 7;

// const input = [1, 1, 1, 1, 1, 1, 1];
// const target = 11;

console.log(minSum(input, target));
