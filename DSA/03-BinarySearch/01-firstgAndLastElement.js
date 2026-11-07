/** binary search is always gonna work on the sorted array
 * the time complexity of the binary search is O(log n)
 * interview will ask for the sorted array and log n time complexity
 *
 * formula :
 * left = 0
 * right = n-1
 * mid(l + (l-r)/n)
 *
 * logic is simple
 * we are gonna check the mid first
 * if(arr[mid] > target)
 * r = mid-1
 * else if(arr[mid] < target)
 * l = mid+1
 * else
 * return mid
 */

/**find first and last index of the given target
 * we are going to find the left_most and right_most using the mid value and target
 *
 *
 */

function findLeftMost(i, t, n) {
  let l = 0,
    r = n - 1,
    left_most = -1;
  while (l < r) {
    const mid = Math.floor(l + (r - l) / 2);
    if (i[mid] === t) {
      left_most = mid;
      r = mid - 1;
    } else if (i[mid] < t) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return left_most;
}
function findRightMost(i, t, n) {
  let l = 0,
    r = n - 1,
    right_most = -1;
  while (l < r) {
    const mid = Math.floor(l + (r - l) / 2);
    if (i[mid] === t) {
      right_most = mid;
      l = mid + 1;
    } else if (i[mid] < t) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return right_most;
}
function leftAndRightMost(input, target) {
  const n = input.length;

  const left_most = findLeftMost(input, target, n);
  const right_most = findRightMost(input, target, n);

  return { left_most, right_most };
}

console.log(leftAndRightMost([0, 1, 2, 2, 2, 2, 2, 4, 5], 2));
