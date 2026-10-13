//filter --> takes each element in the array and check for the conditional statement to satisfy, if satisfied then element is pushed into output array

//filter takes the callback fucnction and inside the callback we can write the conditional statement
const nums1 = [1, 2, 3, 4];

const moreThanTwo = nums1.filter((num) => {
  return num > 2;
});

console.log(moreThanTwo);
