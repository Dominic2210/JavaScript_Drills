// ARRAY Methods

// FOR - EACH Method
// This Method performs the given operation on each element of the array. It changes the original array
let array = ["Delhi", "Hyderabad", "Mumbai"];
console.log(array);

array.forEach((val) => {
  console.log(val.toUpperCase());
});

// MAP method
// This method does the same function as the "for each method", but stores the new values in a new array.

let arr = [2, 5, 7, 3, 4];

let arr2 = arr.map((i) => {
  return i ** 2;
});

console.log(arr2);

// FILTER method
// This method filters elements of an array based on a defined condition. It returns elements that hold true for the condition

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);

let evenArr = numbers.filter((i) => {
  return i % 2 !== 0;
});

console.log(evenArr);

// REDUCE method
// This method is used when an operation is to be performed on all the elements of the array, and a single value is required as an output. This method reduces the array to a single output and returns that single value.

// Finding the sum of all elements in the array.
let num = [6, 1, 7, 4];

let res = num.reduce((prev, curr) => {
  return prev + curr;
});
console.log(res);

// Finding the greatest number in the array.
const grtNum = (prev, curr) => {
  return prev > curr ? prev : curr;
};

let grt = num.reduce(grtNum);
console.log(grt);
