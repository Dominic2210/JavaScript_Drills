// Guess the number game

let crtNum = 25;
let usrNum = prompt("Guess the number :");

while (usrNum != crtNum) {
  // prommpt always returns a string value. use only single '=' sign
  usrNum = prompt("Oops! Wrong! Try Again :");
}

console.log("Congratulations!! You guessed it right!");
