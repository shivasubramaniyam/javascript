// reduce method is going to reduce the value down to the single resultant value

//reduce takes the callback function and the initial value

// acc --> accumulator --> that is the result of the previous computation in the array

//curr --> current value of the array

const nums2 = [1, 2, 3, 4, 5];
const sum = nums2.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);

console.log(sum);
