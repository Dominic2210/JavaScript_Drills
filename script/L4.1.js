// ARRAY METHODS :

let veggies = ["onion", "tomato", "Potato", "Chilli"];

veggies.push("Cabbage"); // Method to add elements to an array. It adds elements to the end of an array.
console.log(veggies);
// Method to add element at the start of an array.
console.log(veggies);
veggies.unshift("Leak");
console.log(veggies);

let dltItem = veggies.pop(); // Method to remove element from an array. It removes the last element of the array and returns it.
console.log(veggies);
console.log(`Deleted Item = ${dltItem}`);
// Method to remove element from the start of an array.
let dlt2 = veggies.shift();
console.log(`Deletes item from the start = ${dlt2}`);

let numbers = [93, 87, 00, 12];
console.log(numbers);
console.log(numbers.toString()); // Method to convert all the elements of an array to string.

let marvelHereos = ["Ironman", "Captain America", "Hulk"];
let dcHeroes = ["Superman", "Batman", "Aquaman"];

console.log(marvelHereos);
console.log(dcHeroes);

let heroes = dcHeroes.concat(marvelHereos); // Method to join two or more arrays.
console.log(heroes);

let dc = heroes.slice(0, 3); // Method to find part of an array. The ending index is not included
console.log(dc);

// Splice Method
// Method to remove particular elements from the index.
heroes.splice(4, 1);
console.log(
  `The 4th index element in the original array has been removed = ${heroes}`
);

// Method to add elements in any paricular index.
heroes.splice(3, 0, "antman");
console.log(
  `Addition of an element in the 3rd index of the original array = ${heroes}`
);

// Method to replace elements in any index.
heroes.splice(4, 2, "Hawkeye", "Black Widow");
console.log(`The 4th & 5th index elements in the original array have been replaced = ${heroes}`);