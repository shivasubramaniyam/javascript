// under the hood, aysnc keyword tries to run the promise and return the promise in the code
async function f() {
  return 1;
}

// console.log(f()); //Promise { 1 }

// f().then((val) => console.log(val));

const val = await f();
// console.log(val);

// 1. pending
// 2. resolve
// 3. rejected

// const url =
//   "https://private-anon-90e0b723a5-pizzaapp.apiary-mock.com/restaurants/restaurantId/menu";

// async function getPizza(menuUrl) {
//   menuUrl = `${menuUrl}?Category=Pizza`;
//   const response = await fetch(menuUrl);
//   //under the hood, fetch function, is now a promise which is going to wait untill the result is returned
//   const menu = await response.json();
//   //under the hood, response function, is now a promise which is going to wait untill the result json is returned
//   return menu;
// }

// const pizzas = await getPizza(url);
// console.log(pizzas);

// async function getBrokenPizzas() {
//   try {
//     throw Error("oops");
//     let response = await fetch("api/some-broken-url");
//     let pizzas = await response.json();
//     return pizzas;
//   } catch (err) {
//     console.log("error from the try catch ", err);
//   }
// }

// getBrokenPizzas()
//   .then()
//   .catch((err) => console.log("error from the thencatch "));

// promise vs async await

// 1.promise def
function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`making Request to ${location}`);
    if (location === "Google") {
      resolve("Google says hi");
    } else {
      reject("we can only talk to google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("processing response");
    resolve(`extra information + ${response}`);
  });
}

// calling the function

// makeRequest("Google")
//   .then((response) => {
//     console.log("Response Recived");
//     return processRequest(response); //as this is the promise we need to return it to use the chained then
//   })
//   .then((processedResponse) => {
//     console.log(processedResponse);
//   })
//   .catch((err) => console.log(err));

async function doWork() {
  try {
    const response = await makeRequest("Google"); //if the await sucessful, it goes for the resolve block and to catch the error we use the try/cathc block
    console.log("Response Recived");
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (err) {
    console.log(err);
  }
}

doWork();
