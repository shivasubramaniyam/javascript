//loops and strings

// for (let i = 1; i <= 5; i++) {
//   console.log("i am a millionare");
// }

//for loop

// let n = prompt("Enter the value of n");
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
//   console.log(sum);
// }

//while loop

// let i=1;
// while (i<=10)
// {
//     console.log("shiva's greatest redemption");
//     i++;
// }

// //do while loop
//  i=1;
// do{
//     console.log("do while acts weirdly different");
//     i++;
// }while(i<=7);

// //for-of loop

// let str = "Shiva Subramaniyam S";
// let size = 0;
// for (let i of str) {
//   console.log("i=", i);
//   size++;
// }

// console.log("the size of the string : ", size);

// //for in loop

// let student = {
//   name: "shiva ",
//   age: 22,
//   cgpa: 9.05,
//   isPass: true,
// };

// for (let i in student) console.log(i, " = ", student[i]);

//Q1. even number 0 to 100

// for(let i =0 ;i<=100;i++)
// {
//     if(i%2==0){
//     console.log(i);
// }
// }

//Q2. random number guessing game

// let number = 15;
// let guess = prompt("Enter the number");
// while(guess !== number)
// {

// }
// alert("Congratulation, you have entered correct number");
// console.log("Congratulation, you have entered correct number");

//strings

// let str1 = "shiva";
// let str2 = "sathya";

// console.log(str1.length);
// console.log(str2.length);
// console.log(str1[3]);

//template literals

// let obj = {
//     item : "pen",
//     price : 10,
// };

// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// let specialString = `this is a template literals`;

// console.log(typeof specialString);

// //escape character in the template literals

// str4 = "Apna \nCollege";
// console.log(str4.length);

// //string methods

// let str = "Apna College";
// let str5 = str.toUpperCase();
// console.log(str5);
// let str6 = str.toLowerCase();
// console.log(str6);

// let str7 = "      shiva subramaniyam s      ";

// console.log(str7);
// console.log(str7.trim());

// let str8 = "123456";
// let str9 = "78910";
// console.log(str8.slice());
// console.log(str8.slice(1, 4));
// console.log(str8.concat(str9));
// console.log(str8.replace(1, 10));
// console.log(str8.charAt(4));
