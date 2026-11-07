/**get the even digits from the array */

function EvenDigits(arr) {
  const n = arr.length;
  let result = [];
  for (let i = 0; i < n; i++) {
    const toString = arr[i].toString();
    // console.log(toString);
    if (toString.length % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(EvenDigits([1, 2, 355, 54, 5656, 61, 7]));
