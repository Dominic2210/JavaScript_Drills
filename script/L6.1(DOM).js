/*-- getAttribute and setAttribute

let divAttr = document.querySelector("div");
console.log(divAttr);

let value = divAttr.getAttribute("id");
console.log(value);

let valueName = divAttr.getAttribute("name");
console.log(valueName);

let paraAttr = document.querySelector("p");
console.log(paraAttr);

let valuePara = paraAttr.getAttribute("class");
console.log(valuePara);

valuePara = paraAttr.setAttribute("class", "newClass");
console.log(valuePara); 

let heading = document.querySelector("h2");
console.log(heading);

heading.setAttribute("class", "head2"); --*/

/*-- node.style 

let head = document.querySelector("h2");
console.log(head);

head.style.color = "green";

let divStyle = document.querySelector("#box");
console.log(divStyle);

divStyle.style.border = "1px solid black";
divStyle.style.width = "300px";
divStyle.style.textAlign = "center" --*/

/*-- INSERT & DELETE ELEMENTS --*/
let divStyle = document.querySelector("#box");
console.log(divStyle);
divStyle.style.border = "1px solid black";
divStyle.style.width = "300px";
divStyle.style.padding = "20px";

let newBtnEl = document.createElement("button");
newBtnEl.innerText = "CLICK ME!!";
newBtnEl.style.width = "150px";
newBtnEl.style.height = "70px";
newBtnEl.style.color = "white";
newBtnEl.style.backgroundColor = "red";
newBtnEl.style.marginLeft = "10px";

// divStyle.append(newBtnEl);
// divStyle.prepend(newBtnEl);
// divStyle.before(newBtnEl);
// divStyle.after(newBtnEl);
// newBtnEl.remove();

document.body.prepend(newBtnEl);

/*-- practice 

let newTextEL = document.createElement("p");
newTextEL.className = "paraClass";
newTextEL.innerText = "This is a List:";
newTextEL.style.backgroundColor = "blue";
newTextEL.style.fontSize = "25px";
newTextEL.classList.add("para");

document.body.append(newTextEL);

--*/
// CLASS_LIST Method
let paraEL = document.querySelector(".class-1");
paraEL.classList.add("class-2");
console.log(paraEL.classList);

/*-- PRACTICE AND LOOK OVER

let docFrag = document.createDocumentFragment();

let fragment = docFrag 
        .appendChild(document.createElement("div"))
        .appendChild(document.createElement("h1"));
    fragment.textContent = "This is a fragment"

    document.body.appendChild(docFrag)

    console.dir(docFrag);
--*/
