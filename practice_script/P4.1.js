// Lecture 4.1  Practice questions :

/* Given an array of comapnies: comp = ["Bloomberg", "MIcrosoft", "Uber", "Google", "IBM", "Netflix"]. 
a. Remove the first company from the array.
b. Replace Uber with Ola.
c. Add amazon at the end. */

let company = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

console.log(company);

// Part (a.)
console.log("Removing the first company name from the array :");
company.shift();
console.log(company);

// Part (b.)
console.log("Replacing Uber with Ola :");
company.splice(1, 1, "Ola");
console.log(company);

// Part (c.)
console.log("Adding Amazon at the end :")
company.push("Amazon");
console.log(company);
