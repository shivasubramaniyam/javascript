/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // Math.floor() ensures we get an integer index in JavaScript
    // Using left + (right - left) / 2 prevents potential floating-point/overflow issues
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1; // Search the right half
    } else {
      right = mid - 1; // Search the left half
    }
  }

  return -1; // Target not found
};

const input = [1, 2, 4, 5, 6, 7, 56, 100, 101, 110];
const target = 6;
console.log(search(input, target));
