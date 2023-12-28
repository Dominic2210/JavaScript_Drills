// FUNCTIONS

// The most basic way to create a function.
function myFunction() {
  console.log("Hello World");
}

// The basic way to call a function
myFunction();

// This function reqires parameters i.e "num1 & num2"
function sumFunction(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

// When this function is called, the required parameters are given in the paranthesis
let add = sumFunction(4, 6);
console.log(add);

// Arrow Functions :

// These functions can be stored in a variable and the paramaeters can be named directly. No need to write the function keyword and give a special function name.
const arrowSum = (a, b) => {
  let sum = a + b;
  return sum;
};

let addition = arrowSum(6, 6);
console.log(addition);

// Multiplication arrow function 
const arrowMult = (a, b) => {
  let mult = a * b;
  return mult;
};

let multiply = arrowMult(6, 5);
console.log(multiply);
