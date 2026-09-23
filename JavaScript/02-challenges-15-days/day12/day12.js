// async await >> promise chains >> callback hell

/*synchronous means the code runs in a particular
sequence of instruction given in the program.
each instruction waits for the previous 
instruction to complete its execution*/

/*Asynchronous 
Due to synchronous programming, sometimes imp
instructions get blocked due to some previous 
instructions, which causes a delay in
the UI. Asynchronous code execution allows to execute next
instructions immediately and doesn't 
block the flow. Upgrade for More Features
*/


//ex of sync programming
// console.log("one");
// console.log("second");
// console.log("third");




//settimeout - we can decide when to execute a perticular function


// function hello(){
//     console.log("hello");
    
// }
// setTimeout(hello,2000);


// console.log("one");
// console.log("two");
// setTimeout(() =>{
//     console.log("hello"),4000
    
// })

// console.log("three");
// console.log("four");


//this below code is an example for the callback function  
// function sum(a,b)
// {
//     console.log(a+b);
    
// }

// function calculator(a,b,sumCallback)
// {
//     sumCallback(a,b);
// }

// calculator(1,2,sum); //we declare a func without trhe paranthesis


// function getData(data)
// {
//     setTimeout(() =>
//     {
//     console.log("data", data);
//     },4000);
    
// }


// getData(1);
// getData(2);
// getData(3);

//to get the each data with delay of 4s we can try this function

// function getData(data,nextData) {
//   setTimeout(() => {
//     console.log("data", data);
//     if(nextData)
//     {
//         nextData();
//     }
//   }, 2000);
// }

// getData(1,() =>{
//     console.log("getting the data2");
    
//     getData(2,()=>{
//     console.log("getting the data3");

//         getData(3,()=>{
//     console.log("getting the data4");

//             getData(4);
//         })
//     })
// });
//the above code looks complex and its called as the callback hell
//to overcome this callback hell
//promises were introduced

/* promise is for "Eventual" completion of task . it is an object in JS

let promise = new promise((resolve,reject) => {.....})

resolve and reject are the 2 callbacks given by the JS*/

// let promise = new Promise((resolve,reject) =>
// {
//     console.log("i am promise");
//     resolve(123);
//     reject("some error occured");
// })


// function getData(data,nextData) {
//     return new Promise((resolve,reject) =>
//     {
//         setTimeout(() => {
//           console.log("data", data);
//           resolve("success");
//           if(nextData)
//           {
//               nextData();
//           }
//         }, 2000);
      
//     })
// }

/*there are 3 condition in the promises
1. pending: the result is undefined
2.resolved: the result is a value
3.rejected : the result is an error object
*/

// const getPromise = () =>{ 
//     return new Promise((resolve,reject) =>
// {
//     //console.log("i am promise");
//     //resolve("resolve");
//     reject("error");
// });
// };

// let promise =getPromise();

// //if the promises is success then we use this command
// promise.then(() =>
// {
//     console.log("promise fulfilled");
    
// })

// promise.catch((err)=>
// {
//     console.log("rejected",err);
    
// })



//promise example
// function asyncFunc() 
// {
//     return new Promise((resolve,reject) =>
//     {
//         setTimeout(()=>
//         {
//             console.log("Some data1");
//             resolve("Success");
//         },4000);
//     });
// }

// let p1 = asyncFunc();
// p1.then((res) => {
//     console.log(res);
// })






//promise chaining

// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data1");
//       resolve("Success");
//     }, 4000);
//   });
// }


// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data2");
//       resolve("Success");
//     }, 4000);
//   });
// }

// console.log("Fetching data1....");
// asyncFunc1().then((res) => {
// console.log("Fetching data2....");
// asyncFunc2().then((res)=>{})
// });



//solving callback hell ex using promise chain 
// function getData(data) {
//   return new Promise((resolve,reject) =>{setTimeout(() => {
//     console.log("data", data);
//     resolve("Success");
//   }, 2000);
// });
// }

// getData(1).then((res) => {
//     return getData(2);    
//     }).then((res)=>{
//         console.log(res);
//     })


//callback hell
// getData(1,() =>{
//     console.log("getting the data2");
    
//     getData(2,()=>{
//     console.log("getting the data3");

//         getData(3,()=>{
//     console.log("getting the data4");

//             getData(4);
//         })
//     })
// });





/*async await

async func always return a promise.

async function myFunc() {.....}

await pauses the execution of its surronding async function 
until the promise is settled.*/


// function api()
// {
//     return new Promise((resolve,reject) =>
//     {
//         setTimeout(() => {
//             console.log("Weather data");
//             resolve(200);
            
//         }, 2000);
//     })
// }

// async function getWeatherData()
// {
//     await api(); //1st request call
//     await api();
// }






//solving callback hell using async await func
function getData(data) {
  return new Promise((resolve,reject) =>{
    setTimeout(() => {
    console.log("data", data);
    resolve("Success");
  }, 2000);
});
}

// async function getAllData() {
//     await getData(1);
//     await getData(2);
//     await getData(3);
// }
/* whenever we use async awit is use 
we dont use then and catch statement in
the code and vice versa*/




/* IIFE: immediatelt invoked function expression
this will directly execute the code without 
calling that function in the console

(function)();
this is the syntax for the IIFE*/
(async function() {
  await getData(1);
  await getData(2);
  await getData(3);
})();