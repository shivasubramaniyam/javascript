/** q1 : map vs foreach
1. map function does the calculation in the code and return the new array whereas the foreach array will modify the input array

2. we can chain the map function using the filter fucntion, etc.. but we cannot chain 
*/

const arr = [2, 5, 3, 4, 7];

const mapResult = arr.map((ar) => {
  return ar + 2;
});

const forEachResult = arr.forEach((ar, i) => {
  arr[i] = ar + 3;
});

console.log(mapResult, forEachResult);

let students = [
  { name: "shiva", rollNumber: 5, marks: 100 },
  { name: "shreesha", rollNumber: 41, marks: 50 },
  { name: "sathya", rollNumber: 32, marks: 98 },
];

// using the for loop
let names1 = [];
for (let i = 0; i < students.length; i++) {
  names1.push(students[i].name.toUpperCase());
}
console.log(names1);
//return student name in uppercase
const names = students.map((stu) => stu.name.toUpperCase());

console.log(names);

// return student detail who scored more than 60
const details = students.filter((stu) => stu.marks > 60);

console.log(details);

// return student detail who scored more than 60 and roll number more than 15
const details1 = students.filter(
  (stu) => stu.marks > 60 && stu.rollNumber > 15,
);

console.log(details1);

// sum of marks of all the students

const sum = students.reduce((acc, curr) => acc + curr.marks, 0);
console.log(sum);

//return only names of the student who scored mre than 60

const Toppers = students.filter((stu) => stu.marks > 60).map((stu) => stu.name);
console.log(Toppers);

const totalMarks = students
  .map((stu) => {
    if (stu.marks < 60) {
      stu.marks += 20;
    }
    return stu;
  })
  .filter((stu) => stu.marks > 60)
  .reduce((acc, curr) => acc + curr.marks, 0);
console.log(totalMarks);
