/*--  Get Element By ID
let header = document.getElementById("heading1");
let header2 = document.getElementById("heading2");
console.log(header);
console.dir(header2); --*/

/*-- Get Element By CLASS
let classSel = document.getElementsByClassName("hStyle");

Get Element By TAG
let tagName = document.getElementsByTagName("h1"); --*/

/*-- QUERY Selector
let singleEle = document.querySelector("p");
console.dir(singleEle);
let allEle = document.querySelectorAll("p");
console.dir(allEle);

let singleCl = document.querySelector(".hStyle");
console.dir(singleCl);
let allCl = document.querySelectorAll(".hStyle");
console.dir(allCl);

let idSel = document.querySelector("#heading1");
console.dir(idSel); --*/

/*-- Properties
let head = document.querySelector("div");
// console.log(head.tagName);
// console.dir(head.innerText);
// console.dir(head.innerHTML);
// console.dir(head.textContent);
let HTML = head.innerText;
console.log(HTML); --*/

let heading = document.querySelector("h2");

heading.innerText = heading.innerText + " from Rishabh Trivedi";

console.dir(heading.innerText);

let divs = document.querySelectorAll(".box");
console.log(divs);

/* -- METHOD - 1
divs[0].innerText = "HELLO";
divs[1].innerText = "JAVA - ";
divs[2].innerText = "SCRIPT"; --*/

/*-- METHOD - 2 --*/
let idx = 1;
for (let i of divs) {
  i.innerText = `HELLO ${idx}`;
  idx++;
}
console.log
