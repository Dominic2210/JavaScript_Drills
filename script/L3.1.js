// STRINGS
// let string = "Rishabh Trivedi";

// let size = string.length;

// let char = string[0];

// Template literals

let templateStr = `This si a string using backwards quotes`;
console.log(templateStr);

let obj = {
  name: "Rishabh",
  age: 21,
  phnNo: 8919644028,
};

// common way to print
console.log("This is", obj.name, "age", obj.age, "Mobile no. :", obj.phnNo);

// Easier way to print, where numbers are also converted into strings.
let output = `This is ${obj.name}, \nage : ${obj.age}, \nMobile no. : ${obj.phnNo}.`;
console.log(output);

// String Methods

let string = "Rishabh";
let string2 = " Trivedi";
console.log(string);
console.log(string2);

let newStr = string.toUpperCase(); //Method to turn all char into upper case.
console.log(newStr);

let lowStr = string.toLowerCase(); //Method to turn all char into lower case.
console.log(lowStr);

let trimStr = "   Rishabh Trivedi    ";
console.log(trimStr);
console.log(trimStr.trim()); //Method to remove all extra spaces from the start and end of the string.

let sliceStr = string.slice(1, 6); // Method to get part of a string. the end index value is not included.
console.log(sliceStr);

let fullName = string.concat(string2); // Method to add another string at the end of a string
console.log(fullName);

let replStr = string.replace("R", "2"); // Method to search and replace particular value in a string.
console.log(replStr);

let replString2 = string2.replace("i", "1"); // The normal replace method only replaces the first instance of the search value. It does not repeat.
console.log(replString2);

let replAll = string2.replaceAll("i", "1");
console.log(replAll);

let charString = string.charAt(0); // Method to find out the character at a particular index.
console.log(charString);
