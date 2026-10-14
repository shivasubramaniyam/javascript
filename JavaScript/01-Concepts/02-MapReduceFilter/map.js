// map is the function that is used to create the new from the existing array

//it is going to take 3 parameter, 1st is the current element in the array, 2nd is the index of the array, then the 3rd takes the entire array

const nums = [1, 2, 3, 4];
const multiplyThree = nums.map((num, i, arr) => {
  return num * 3 + i;
});

console.log(multiplyThree);

//lets create the polyfils for the map function in the code

//polyfils --> that doesn;t support modern browser still want the legacy system

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const nums4 = [1, 2, 3, 4];
const multiplyThree2 = nums4.myMap((num, i, arr) => {
  return num * 3 + i;
});

console.log(multiplyThree2);
