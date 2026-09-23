/**A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future. */

/** A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.*/

/*The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. */

/*
Promise concurrency
The Promise class offers four main static methods to facilitate async task concurrency:

Promise.all()
Fulfills when all of the promises fulfill; rejects when any of the promises rejects.

Promise.allSettled()
Fulfills when all promises settle.

Promise.any()
Fulfills when any of the promises fulfills; rejects when all of the promises reject.

Promise.race()
Settles when any of the promises settles. In other words, fulfills when any of the promises fulfills; rejects when any of the promises rejects. */

// synatax

// let p = new Promise((resolve, reject) => {
//   let a = 1 + 2;
//   if (a == 2) {
//     resolve("Success");
//   } else {
//     reject("failed");
//   }
// });

// // anything that goes inside .then for the successfull state/ resolve state
// p.then((message) => {
//   console.log("this is in the then", message); //this is in the then Success
// }).catch((message) => {
//   console.log("this is in the catch", message); //this is in the catch failed
// });

// callback vs promise syntax

// 1. callback
const userLeft = false;
const userWatchingCatMeme = false;

// function watchingTutorialCallback(callback, errorCallback) {
//   if (userLeft) {
//     errorCallback({
//       name: "user Left",
//       message: ":(",
//     });
//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       name: "user watching cat meme",
//       message: "cat meme > studies",
//     });
//   } else {
//     callback("you are progressing in carrer");
//   }
// }

// watchingTutorialCallback(
//   (message) => {
//     console.log("sucess " + message);
//   },
//   (error) => {
//     console.log(error.name + " " + error.message);
//   },
// );

// 2. promise

// function watchingTutorialPromise() {
//   return new Promise((resolve, reject) => {
//     if (userLeft) {
//       reject({
//         name: "user Left",
//         message: ":(",
//       });
//     } else if (userWatchingCatMeme) {
//       reject({
//         name: "user watching cat meme",
//         message: "cat meme > studies",
//       });
//     } else {
//       resolve("you are progressing in carrer");
//     }
//   });
// }

// watchingTutorialPromise()
//   .then((message) => {
//     console.log("success " + message);
//   })
//   .catch((error) => {
//     console.log(error.name + " " + error.message);
//   });

// ex:2

// const recordVideoOne = new Promise((resolve, reject) => {
//   resolve("Video 1 recorded");
// });
// const recordVideoTwo = new Promise((resolve, reject) => {
//   resolve("Video 2 recorded");
// });
// const recordVideoThree = new Promise((resolve, reject) => {
//   resolve("Video 3 recorded");
// });

// Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
//   (messages) => {
//     console.log(messages);
//   },
// );
/** returns a success message if all the promise got resolve, but the
 * time taken to resolve might be different for dif. promise
 */

// Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
//   (message) => {
//     console.log(message);
//   },
// );

//this .race fucntion is going to return the first promise to complete in the code
