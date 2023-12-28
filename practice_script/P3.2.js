// Lecture 3.2 Practice questions

// To create a username after taking input from the user.

let inpName = prompt("Please Enter your name :");
// Method - 1
// let u1 = "@";
// let u2 = inpName.length;
// let usrName = u1.concat(inpName, u2);
// console.log("Your username should be: ", usrName);

// Method - 2

let usrName = "@" + inpName + inpName.length;
console.log("Your username should be: ", usrName);

