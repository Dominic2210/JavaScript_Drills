// Single click event
let button1 = document.querySelector(".btn1");

button1.onclick = () => {
  console.log("You clicked the button!");
};

// Ddouble click event
let button2 = document.querySelector(".btn2");

button2.ondblclick = () => {
  console.log("You clicked this button 2X");
};

// Hover event
let div1 = document.querySelector(".div1");

function random(num) {
  return Math.floor(Math.random() * (num + 1));
}

div1.onmouseover = () => {
  const rndclr = `rgb(${random(255)}, ${random(250)}, ${random(200)})`;

  div1.style.backgroundColor = rndclr;
};

// Practice and Event object (e / evt / event).
let newBtn = document.createElement("button");
newBtn.className = "btn3";
newBtn.innerText = "btn3";

let body = document.querySelector("body");
document.body.append(newBtn);

newBtn.onclick = (evt) => {
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY);
};
