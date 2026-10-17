/** given the array in the code and target
 * if the target is found in the array then remove it
 * else keep the element
 */

const arr = [3, 2, 1, 2, 3];
const target = 2;

//approach 1 : if the new array can be created
function RemovetargetElement(arr, target) {
  const result = arr.filter((item) => item !== target);
  //   const result = [];
  //   const n = arr.length;
  //   for (let i = 0; i < n; i++) {
  //     if (arr[i] !== target) {
  //       result.push(arr[i]);
  //     }
  //   }
  return result;
}

console.log(RemovetargetElement(arr, target));

//approach 2 : if the new array cannot be created (in-place)

function RemovetargetElement1(arr, target) {
  const n = arr.length;
  let j = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] !== target) {
      arr[j] = arr[i];
      j++;
    }
  }
  arr.length = j;
  return arr;
}

console.log(RemovetargetElement1(arr, target));
