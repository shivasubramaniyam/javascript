//filter --> takes each element in the array and check for the conditional statement to satisfy, if satisfied then element is pushed into output array

//filter takes the callback fucnction and inside the callback we can write the conditional statement
const nums1 = [1, 2, 3, 4];

const moreThanTwo = nums1.filter((num) => {
  return num > 2;
});

console.log(moreThanTwo);

//polyfil for the filter()

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }

  return temp;
};

const nums5 = [1, 2, 3, 4];

const moreThanTwo2 = nums5.myFilter((num) => {
  return num > 2;
});

console.log(moreThanTwo2);
