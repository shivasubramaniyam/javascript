/**input = [-1, 0, 1, 2, -1, -4, 0, 2];
target = 0;
output : {{-4,2,2},{-1,-1,2},{-1,0,1}}}


approach : check for the triplet which result in the target = 0
note : duplicates not allowed
if the question is asked for the index then we can;t proceed with the sorting


let us consider the example 
arr = [-1, 0, 1, 2, -1, -4, 0, 2] it is the sorted arr
but we have the duplicate numbers that can possibly increase the iterations and duplication,
to avoid those situation we need the validation check for the code 
if(a[i] == a[i+1]) and a[j] == a[j+1], then skip that iteration 

lets apply in the 3 sum problem
n1+n2+n3=0 ==> n2+n3 = -(n1) technically target = -(n1)

i.e if in arr, -1 is 0 index then start arr from idx 1 to n-1 to get the sum equal to the 1st element --> (-n1) = n2+n3 if we get the triplet move the target to next element in the arr

for this approach, we need the sorted arr
*/
const input = [-1, -1, 0, 2, 2, -4, 0];
const target = 0;
function ThreeSumProblem(input, target = 0) {
  const n = input.length;
  const result = [];
  if (n < 3) {
    return [];
  }

  //sort
  const sortedArray = input.toSorted((a, b) => a - b);
  // console.log("after sorting the element in the array", sortedArray);

  // two sum
  function twoSum(arr, RemaniningTarget, left, right, n1) {
    while (left < right) {
      const sum = arr[left] + arr[right];
      if (sum === RemaniningTarget) {
        result.push([n1, arr[left], arr[right]]);
        //remove the dulpicate element from left to right
        while (left < right && arr[left] === arr[left + 1]) left++;
        while (left < right && arr[right] === arr[right - 1]) right--;

        left++;
        right--;
      } else if (sum < RemaniningTarget) {
        left++;
      } else {
        right--;
      }
    }
  }

  //fixing one element : n1
  for (let i = 0; i < n - 2; i++) {
    if (target === 0 && sortedArray[i] > 0) {
      break;
    }
    if (i > 0 && sortedArray[i] === sortedArray[i - 1]) {
      continue;
    }
    const n1 = sortedArray[i];
    const remainingTarget = target - n1;

    twoSum(sortedArray, remainingTarget, i + 1, n - 1, n1); //find n2 and n3 for the target
  }
  return result;
}

// console.log(ThreeSumProblem(input, target));

/**3 sum extended
 * input = [-1,2,1,4] target = 1
 *
 * lets take -1+2+1 = 2, where 2 is closest to target 1
 * lets take -1+1+4 = 4, where 4 is not closest to target 1
 *
 * approach : if the index is not returned as the output, lets sort the array so that we can do a 2sum like previous question
 * use 3 indices i,j,k and move k first then j then i => o(n3)
 *
 * let's use the 3 sum concept
 * */

function ThreeSumclosest(arr, target) {
  //obtain the length
  const n = arr.length;

  if (n < 3) {
    return [];
  }

  const sortedArray = arr.toSorted((a, b) => a - b);
  // console.log(sortedArray);

  //global closest value
  let closestValue = sortedArray[0] + sortedArray[1] + sortedArray[2];

  //apply 2 sum logic
  function TwoSum(a, remainingTarget, left, right, k) {
    while (left < right) {
      const sum = a[left] + a[right] + a[k];
      if (Math.abs(target - sum) < Math.abs(target - closestValue)) {
        closestValue = sum;
      }
      // Exact match found: distance cannot be less than 0
      if (sum === target) {
        return sum;
      }
      if (sum > remainingTarget) {
        right--;
      } else {
        left++;
      }
    }
  }

  for (let k = 0; k < n - 3; k++) {
    let i = k + 1;
    let j = n - 1;

    TwoSum(sortedArray, target, i, j, k);
  }
  return closestValue;
}

// Test Case 1: Standard case with mixed positive/negative numbers
const arr1 = [-1, 2, 1, -4];
const target1 = 1;
console.log(ThreeSumclosest(arr1, target1));
// Expected Output: 2
// Explanation: The sum that is closest to target is 2 (-1 + 2 + 1 = 2).

// Test Case 2: Exact target match exists
const arr2 = [0, 0, 0];
const target2 = 1;
console.log(ThreeSumclosest(arr2, target2));
// Expected Output: 0
// Explanation: The only triplet sum is 0 (0 + 0 + 0 = 0).

// Test Case 3: Target matches an exact triplet
const arr3 = [1, 1, 1, 0];
const target3 = -100;
console.log(ThreeSumclosest(arr3, target3));
// Expected Output: 2
// Explanation: The smallest possible triplet sum is 2 (0 + 1 + 1 = 2).

// Test Case 4: Target is larger than any possible sum
const arr4 = [1, 2, 3, 4, 5];
const target4 = 100;
console.log(ThreeSumclosest(arr4, target4));
// Expected Output: 12
// Explanation: The maximum triplet sum is 12 (3 + 4 + 5 = 12).

// Test Case 5: All negative numbers
const arr5 = [-5, -4, -3, -2, -1];
const target5 = -10;
console.log(ThreeSumclosest(arr5, target5));
// Expected Output: -10
// Explanation: Triplet (-5 + -4 + -1 = -10) matches the target exactly.

// Test Case 6: Duplicate numbers
const arr6 = [4, 0, 5, -5, 3, 3, 0, -4, -5];
const target6 = -2;
console.log(ThreeSumclosest(arr6, target6));
// Expected Output: -2
// Explanation: Triplet (-5 + 0 + 3 = -2) matches the target exactly.
