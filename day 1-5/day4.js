// arrays

// let marks = [97, 82, 75, 64, 36];
// console.log(marks);
// console.log(marks.length); //array properties

// let heros = ["ironman", "hulk", "spiderman", "superman"];

// console.log(heros);
// console.log(typeof heros);

// arrays are mutable whereas string in js is immutable

// let heros = ["ironman", "hulk", "spiderman", "superman"];

// for (let idx = 0; idx < heros.length; idx++) {
//   console.log(heros[idx]);
// }

// let cities = ["delhi", "bangalore", "mumbai"];

// for (let city in cities) {
//   console.log(cities[city].toUpperCase());
// }

// let student_marks = [85, 97, 44, 37, 76, 60];
// let size = student_marks.length;
// let avg = 0;
// let sum = 0;

// for (let i of student_marks) {
//   sum += i;
//   avg = sum / size;
// }

// console.log(`average marks of the class is ${avg}`);

// let price = [250, 645, 300, 900, 50];

// for (let i in price) {
//   price[i] -= price[i] * 0.1;
// }

// console.log(`the 10% discount price for the each items = ${price}`);

// let foodItem = ["potato","apple","lichies","tomato"];
// foodItem.push("papaya","chicken","eggs");

// console.log(foodItem);

// let deletedItem = foodItem.pop();
// let marks = [96,97,95,45];
// console.log(`deleted item in the list = ${deletedItem}`);

// console.log(foodItem.toString());
// console.log(marks.toString());
// console.log(marks);

// let marvelHeros = ["thor", "spiderman", "ironman"];
// let dcHeros = ["superman", "aquaman", "batman"];
// marvelHeros.unshift("Antman"); //adding the value at the start of the array
// marvelHeros.shift(); // remove the value at the start of the array

// let heros = marvelHeros.concat(dcHeros);
// console.log(heros);

// console.log(marvelHeros.slice(1, 2)); //here the starting value is considered for slicing but the ending value is not considered .

//splice
// [1,2,3,4,5,6,7]
//splice(2,3,101,102); (slice_position,delCount, add element
//value = [1,2,101,102,6,7];

// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(2, 3, 101, 102, 103, 104);
// console.log(arr);
