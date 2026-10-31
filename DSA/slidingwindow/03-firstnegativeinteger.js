/** first negative integer in every window of size k
 * input =[-8,2,3,-6,10], k=2
 * in each window size, we need to find the 1st negative integer
 * it 1 : as k=2 => -8,2 is the first window where the -8 result for that window
 * it 2 : 2,3 => no negative number
 * it 3 : 3,-6 => -6
 * it 4 : -6,10 => -6
 *
 * approach :
 * initially i and j will be in the starting position
 * if j is positive then dont add it in the queue, negative number means add it in the queue
 * increase j till window size k => j-i+1
 * while increementing the i we need to check the queue,
 * 1 .if the i'th element is having in the queue, remove from the queue
 * 2. if not present then dont add
 * 3. if the queue is having more than 2 negative element, then add the 1st ele of the queue to the result i.e left most ele
 */

function FirstNonNegativeInteger(a, k) {
  const n = a.length;
  let i = 0,
    j = 0;
  const result = []; // Stores negative numbers in the current window
  const queue = []; // Stores the final answer for each window
  while (j < n) {
    //1. calculate if the element is negative, add it to the queue
    if (a[j] < 0) {
      queue.push(a[j]);
    }

    // 2. Expand window until size reaches k
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      // Find answer for the current window [i...j]
      if (queue.length > 0) {
        result.push(queue[0]); // The leftmost negative number in the window
      } else {
        result.push(0); // No negative number in this window
      }

      // Slide the window: remove outgoing element a[i] from queue if it matches

      if (queue.length > 0 && a[i] === queue[0]) {
        queue.shift();
      }
      i++;
      j++;
    }
  }
  return result;
}

const input = [-8, 2, 3, -6, 10];
const k = 2;
console.log(FirstNonNegativeInteger(input, k));
