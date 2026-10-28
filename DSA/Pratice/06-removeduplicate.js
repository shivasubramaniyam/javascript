/** remove the duplicate element in the code
 *
 * there are 3 aprroach in the code
 * 1. using the Set method used in the JS
 * 2. using the filter and indexOf of the code
 * 3. using the sorted array
 */

//approach 1 :
const input = [1, 2, 1, 2, 1, 3, 4, 5, 6, 7, 8];

function RemoveDuplicate(arr) {
  const uniqueElement = [...new Set(arr)];
  return uniqueElement;
}

// console.log(RemoveDuplicate(input));

//approach 2 :
function RemoveDuplicate1(arr) {
  const uniqueElement = arr.filter(
    (item, index) => index === arr.indexOf(item),
  );
  return uniqueElement;
}

// console.log(RemoveDuplicate1(input));

//approach 3 :
function RemoveDuplicate2(arr) {
  const sortArray = arr.toSorted((a, b) => a - b);
  let n = sortArray.length;
  if (n === 0) return [];
  let j = 1;
  for (let i = 1; i < n; i++) {
    if (sortArray[i] !== sortArray[i - 1]) {
      sortArray[j] = sortArray[i];
      j++;
    }
  }
  sortArray.length = j;
  return sortArray;
}

console.log(RemoveDuplicate2(input));
