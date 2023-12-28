// Q. For a given array of numbers, print the square of all individial elements in the array.

let arr = [1, 2, 3, 4, 5, 6];

// Method 1
// arr.forEach((val) => {
//   let sqr = val ** 2;
//   console.log(sqr);
// });

// Method 2

const calcSqr = (val) => {
  let sqr = val ** 2;
  console.log(sqr);
};

arr.forEach(calcSqr);

// Q. Given an array of marks of students. Filter out the students who scored 90+

let marks = [25, 65, 91, 95, 89, 90, 43, 92, 10, 99];

let score = marks.filter((i) => {
  return i >= 90;
});

console.log(score);

// Q. Take an input 'n' from the user and create an array from 1 to n.
// a. Use the reduce method to find the sum of all numbers in the array.
// b. Use the reduce method to find the prod of all numbers in the array.

let usrNum = prompt("Please enter a number :");

let numArray = [];
for (let i = 1; i <= usrNum; i++) {
  numArray[i - 1] = i;
}
console.log(`Now the array formed is : ${numArray}`);

// a. Sum of all numbers in the array.

const sumOfNum = (prev, curr) => {
  return prev + curr;
};

let sum = numArray.reduce(sumOfNum);
console.log(`The sum of all numbers in the array is : ${sum}`);

// b. Product of all numbers in the array.

const prodOfNum = (prev, curr) => {
  return prev * curr;
};

let prod = numArray.reduce(prodOfNum);
console.log(`The product of all numbers in the array is : ${prod}`);
