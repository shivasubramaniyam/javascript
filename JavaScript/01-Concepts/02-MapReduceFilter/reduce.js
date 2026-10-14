// reduce method is going to reduce the value down to the single resultant value

//reduce takes the callback function and the initial value

// acc --> accumulator --> that is the result of the previous computation in the array

//curr --> current value of the array

// 0 is the initial value in the code, if the initial value is used, by default it is going to use the 1st ele of the array

const nums2 = [1, 2, 3, 4, 5];
const sum = nums2.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);

console.log(sum);

//polyfil for the filter()

Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

const nums6 = [1, 2, 3, 4, 5];
const sum2 = nums6.myReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
