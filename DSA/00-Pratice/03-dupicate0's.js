/** check for the zero in the array, if found add the zero to the next to it and it should be inplace in the code */

function DuplicateZero(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      for (let j = n - 1; j > i + 1; j--) {
        arr[j] = arr[j - 1];
      }
      if (i + 1 < n) {
        arr[i + 1] = 0;
      }
      // Skip the newly inserted zero to avoid an infinite loop
      i++;
    }
  }
  return arr;
}

function DuplicateZeroEasy(arr) {
  const result = [];
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    result.push(arr[i]);
    if (arr[i] === 0) {
      result.push(0);
    }
  }
  return result;
}

input = [1, 0, 2, 3, 0, 4, 5, 0];
console.log(DuplicateZeroEasy(input));
