// ARRAYS

let marks = [91, 95, 32, 09];
console.log(marks);

console.log(marks[1]); // To print value at a particular index/position.

marks[1] = 21; // To change any particular value of an array
console.log(marks);

// Looping in arrays

// To print all elements inside an array
// Method 1 - Preferred method
for (let i of marks) {
  console.log(i);
}

// Method 2

// for (idx = 0; idx < marks.length; idx++) {
//   console.log(marks[idx]);
// }

