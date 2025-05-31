// function in JS

//there are 2 process while performing function that is
//function definition and function call

// function myFuntion() { //without parameter or default funtion
//     console.log("this is the first funtion in java script");

// }

// myFuntion();

// function myFuntion1(msg){
//     console.log(msg);

// }

// // myFuntion1("i love the process");

// function sum(a,b){
//     //local variables -> scope
//     s = a + b;
//     console.log("before return");
// console.log(a);

//     return s;
//     console.log("after return");

// }

// let val = sum (12,23);

// console.log(val);

//arrow function => these function are used to store the function in the const variable

// const arrowSum = (a,b) =>{
//     console.log(a+b);
// };

// const arrowMul = (a,b) =>{
//     console.log(a*b);
// };

// /*1) once the function is called without any paramter , it just print the
// function content in the screen just like the
// normal variable.
// 2) if the function called with paramters, then the function gets executed */

// const printHello = ()=> {
//     console.log("hello");
// };

// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//     if (char ==='a' || char==='e' || char==='i' || char==='o' || char==='u') {
//         count++;
//     }
// }
// return count;
// }

// console.log(countVowels("shiva subramaniyam s"));

// const vowels = (str) => {
//     let count = 0 ;
//     for (const char of str) {
//       if (
//         char === "a" ||
//         char === "e" ||
//         char === "i" ||
//         char === "o" ||
//         char === "u"
//       ) {
//         count++;
//       }
//     }
//     return count;
// };

//for-array is specialy used for the array
//it is a method

// for each example with the callback function

// let arr = ["bangalore", "chennai", "hydrabad"];

// arr.forEach((val, idx, array) => {
//   // each value at each index
//   console.log(val, idx, array);
// });

// //Higher order function / method
// /* in the above example the parameter for the 
// for each function is another arrow function 
// hence it is called as higher order funcrtion*/

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr1.forEach((val, idx) => {
//   console.log(val * val, idx);
// });

// //another ways

// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let calcSqaure = (num) => {
//   console.log(num * num);
// };

// arr2.forEach(calcSqaure);

// // array map function works the same as foreach but it can stoer
// // in the new array

// let num = [62, 72];

// let newArr = num.map((val) => {
//   return val * val;
// });

// console.log(newArr);

// // array filter method based on some condition

// let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newArr1 = arr3.filter((val) => {
//   return val % 2 === 0;
// });
// console.log(newArr1);

// // array reduce do all operation in a given array and at
// //last return the single value as a result

// let arr4 = [1, 2, 3, 4];

// const output = arr4.reduce((res, cur) => {
//   return (res = res + cur);
// });

// console.log(output);

// let arr5 = [87, 93, 64, 99, 86];

// const highmarks = arr5.filter((val) => {
//   return val > 90;
// });

// console.log(highmarks);

// let n = prompt("enter the number : ");

// let arr6 = [];
// for (let i = 1; i <= n; i++)
//      arr6[i - 1] = i;

// console.log(arr6);

// let sumArr = arr6.reduce((prev, cur) => {
//   return prev + cur;
// });

// console.log(sumArr);

// let mulArr = arr6.reduce((prev, cur) => {
//   return prev * cur;
// });

// console.log(mulArr);