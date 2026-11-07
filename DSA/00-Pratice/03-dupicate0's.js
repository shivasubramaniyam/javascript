/** check for the zero in the array, if found add the zero to the next to it and it should be inplace in the code */

function DuplicateZero(arr) {
  let temp = 0;
  const n = arr.length;
  for (i = n - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      arr[i++] = arr[i];
      a[i] = 0;
    }
  }
  return arr;
}

input = [1,0,2,3,0,4,5,0]
console.log();
