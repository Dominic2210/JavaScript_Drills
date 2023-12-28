// Lecture 5 Practice questions :

/* a. Create a function using function keyword tha takes strings as an argument and returns the number of vowels in the string.

b. Create the same using arrow function. */

// Part (a.)

function vowelFunction(str) {
  let count = 0;
  for (ind = 0; ind < str.length; ind++) {
    if (
      str[ind] === "a" ||
      str[ind] === "e" ||
      str[ind] === "i" ||
      str[ind] === "o" ||
      str[ind] === "u"
    ) {
      count++;
    }
  }
  return count;
}

let vowels = vowelFunction("sssss");
console.log(vowels);

// Part (b.)

const countVowel = (str) => {
  let count = 0;
  for (let vow of str) {
    if (
      vow === "a" ||
      vow === "e" ||
      vow === "i" ||
      vow === "o" ||
      vow === "u"
    ) {
      count++;
    }
  }
  return count;
};

let counter = countVowel("Rishabh");
console.log(counter);
