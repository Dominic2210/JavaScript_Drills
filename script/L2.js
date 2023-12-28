// Arithematic Operators
let a = 6;
let b = 2;

console.log("ARITHEMATIC OPERATORS :");

console.log("a =", a, "b =", b);
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);

// Uranary operators :
console.log("URANARY OPERATORS :");

let c = 3;
console.log("Initial value of c =", c);
c++;
console.log("Increment of c =", c);

let d = 5;
console.log("Initial value of d =", d);
d--;
console.log("Decrement of d =", d);

// Assignment Operators :
let e = 7;
let f = 3;

console.log("ASSIGNMENT OPERATORS :");

console.log("Initial values of e =", e, ",f =", f);

// e += 3; //Here e = e + 3
// console.log("e += 3 =", e);

// f -= 2; //Here f = f - 2
// console.log("f -= 2 =", f);

// e *= 2; //Here e = e * 2
// console.log("e *= 2 =", e);

// f /= 2; //Here f = f / 2
// console.log("f /= 2 =", f);

e %= 2; //Here e = e % 2
console.log("e %= 2 =", e);

f **= 2; //Here f = f ** 2
console.log("f **= 2 =", f);

// Comparison Operators :
let g = 6;
let h = 8;
let i = 6;
let j = 8;
let k = "Red";
let l = "6";
let m = "red";
let n = "Red";

console.log("COMPARISON OPERATORS :");

console.log(
  "g =", g,
  ",h =", h,
  ",i =", i,
  ",j =", j,
  ",k =", k,
  ",l =", l,
  ",m =", m,
  ",n =", n
);

console.log("g == h", g == h);
console.log("g === h", g === h);
console.log("g != h", g != h);
console.log("g == i", g == i);
console.log("g == l", g == l);
console.log("g === l", g === l);
console.log("k == l", k == l);
console.log("k == n", k == n);
console.log("k === n", k === n);
console.log("g > h", g > h);
console.log("g > i", g > i);
console.log("g >= i", g >= i);
console.log("g > i", g > i);
console.log("g <= i", g <= i);

// Logical Operators :
let o = 8;
let p = 7;
let q = p + 1;

let cond1 = o >= p; //true
let cond2 = o == p; // false
let cond3 = o == q; // true
let cond4 = o < p; // false

console.log("LOGICAL OPERATORS :");

console.log("o =", o, "p =", p, "q = p +1 =", q);
console.log("Conditions :");
console.log("cond1 = o >= p //TRUE");
console.log("cond2 = o == p //FALSE");
console.log("cond1 = o == q //TRUE");
console.log("cond1 = o < p //FALSE");

//Logical AND
console.log("Logical AND");
console.log("cond1 && cond2", cond1 && cond2);
console.log("cond1 && cond3", cond1 && cond3);
console.log("cond1 && cond2 && cond3", cond1 && cond2 && cond3);

//Logical OR
console.log("Logical OR");
console.log("cond1 || cond2", cond1 || cond2);
console.log("cond1 || cond3", cond1 || cond3);
console.log("cond2 || cond4", cond2 || cond4);
console.log("cond1 || cond2 || cond3", cond1 || cond2 || cond3);
console.log("cond1 && cond2 || cond3", (cond1 && cond2) || cond3);
console.log("cond1 && cond2 || cond4", (cond1 && cond2) || cond4);

//Logical NOT
console.log("Logical NOT");
console.log("cond1 = o >= p //TRUE but !(cond1) =", !cond1);
console.log("cond2 = o == p //FALSE but !(cond2) =", !cond2);
console.log("cond1 && cond2 || cond3 is", (cond1 && cond2) || cond3, "but ->");
console.log("cond1 && cond2 || !(cond3) is", (cond1 && cond2) || !cond3);


// Ternary operators :
console.log("TERNARY OPERATORS :");

let r = 14;
let s = 9;
let t = r + s;

let total = t >= 20 ? "True" : "False";
console.log(total);