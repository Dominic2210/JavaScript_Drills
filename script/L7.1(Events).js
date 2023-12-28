/*-- // EVENT HANDLERS
let div = document.querySelector(".div1");

function random(num) {
  let math = Math.floor(Math.random() * (num + 1));
  return math;
}

div.addEventListener("click", () => {
  const rndclr = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

  div.style.backgroundColor = rndclr;
});

let btn1 = document.querySelector(".btn1");

btn1.addEventListener("click", () => {
  console.log(`This button was clicked `);
});
--*/

// let modeBtn = document.querySelector(".btn1");
// let currMode = "Light";

// modeBtn.addEventListener("click", () => {
//   if (currMode === "Light") {
//     currMode = "Dark";
//     document.querySelector("body").style.backgroundColor = "black";
//   } else {
//     currMode = "Light";
//     document.querySelector("body").style.backgroundColor = "white";
//   }
//   console.log(currMode);
// });

let modeBtn = document.querySelector(".btn1");
let body = document.querySelector("body");
let currMode = "Light";

modeBtn.addEventListener("click", () => {
  if (currMode === "Light") {
    currMode = "Dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    currMode = "Light";
    body.classList.add("light");
    body.classList.remove("dark");
  }
  console.log(currMode);
});
