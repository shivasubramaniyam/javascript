/**input = [-1, 0, 1, 2, -1, -4, 0, 2];
target = 0;
output : {{-4,2,2},{-1,-1,2,{-1,0,1}}}


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

console.log(ThreeSumProblem(input, target));
