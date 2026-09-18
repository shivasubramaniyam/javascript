// Write a JavaScript program that:

// Declares a name variable using const.

// Declares an age variable using let.

// Creates a user object with name and age.

// Updates the age to 24.

// Prints the user object.

// const name = "Shiva";
// let age = 23;
// const user = {
//   name: "shiva",
//   age: 23,
// };

// user.age = 24;

// console.log(user);

// // input
// const array = [1, 2, 3, [4, 5, 6], [7, 8, 9]];
// // output : [ 1, 2, 3, 4, 5, 6, 7, 8, 9]
// const flatten = array.flat();

// console.log(flatten);

// without using the flat built in method

// function flattenArray(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       const flatSubArray = flattenArray(arr[i]);
//       for (let j = 0; j < flatSubArray.length; j++) {
//         result.push(flatSubArray[j]);
//       }
//     } else {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

// console.log(flattenArray(array));
