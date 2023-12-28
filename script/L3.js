// // Loops in JS

// // FOR Loops
// console.log("'FOR' Loop :");

// for (let i = 1; i <= 5; i++) {
//   console.log("Rishabh Trivedi");
// }

// //Sum of first n numbers :

// let sum = 0;
// for (let i = 1; i <= 20; i++) {
//   sum = sum + i;
// }

// console.log("The sum of first 20 integers is :", sum);

// // WHILE Loops
// console.log("'WHILE Loop :'");

// let i = 0;
// while (i <= 10) {
//   console.log("i =", i);
//   i++;
// }

// let n = 1;
// let summ = 0;

// while (n <= 20) {
//   summ = summ + n;
//   n++;
// }
// console.log("The sum of first 10 integers is :", summ);

// // DO - WHILE Loops
// console.log("DO - WHILE Loop :");

// let i = 6;
// do {
//   console.log("i =", i);
//   i++;
// } while (i <= 5);

// FOR - OF Loops
console.log("FOR - OF Loop :");
// This is the proper way to find the length of a string
let str = "RISHABH";
let length = 0;
for (let i of str) {
  length++;
}
console.log("The size of the string is =", length);

// FOR - IN Loops
let student = {
  name: "RISHABH",
  age: 21,
  cgpa: 8.5,
  isPass: true,
};


for (let i in student) {
  console.log(i, "=", student[i]);
}
