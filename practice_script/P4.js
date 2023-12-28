// Lecture 4 Practice questions

// To find the average of all numbers of array.

// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;

// for (let i of marks) {
//   sum += i;
// }
// avg = sum / marks.length;
// console.log(`The average marks of the class is ${avg}`);

// Question 2

// Prices of items are given, each item has a 10% off. give the final price of the items.

//Method using [FOR - OF Loop]:
// let itemPrice = [250, 645, 300, 900, 50];
// let ind = 0;
// for (let pri of itemPrice) {
//   console.log(`The original price of item at index ${ind} = ${pri}`);
//   let offer = pri * 0.1;
//   console.log(`The offer for item at ${ind} = ${offer}`);
//   let val = pri - offer;
//   console.log(`The price after offer at ${ind} = ${val}`);
//   ind++;
// }

// Method using [FOR Loop] :
let itemPrice = [250, 645, 300, 900, 50];

for (let ind = 0; ind < itemPrice.length; ind++) {
  let offer = itemPrice[ind] / 10;

  itemPrice[ind] -= offer;
  
}

console.log(`The final array after dicount is ${itemPrice}`);
