const body = document.querySelector("body");

//paragraph 
const para = document.createElement("p");
para.style.color = "red";
para.textContent = "Hey I'm red!";

//header
const header = document.createElement("h3");
header.style.color = "blue";
header.textContent = "I'm a blue h3!";

//div - cant use innerHtml
const div = document.createElement("div");
div.setAttribute("style", "border: 1px solid black; background: pink;");
const paragraph = document.createElement("h1");
paragraph.textContent = "Im in a div";
const h = document.createElement("h1");
h.textContent = "ME TOO!";
div.appendChild(paragraph);
div.appendChild(h);

body.appendChild(para);
body.appendChild(header);
body.appendChild(div);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello!");


// // adds the indicated style rule to the element in the div variable
// div.style.color = "blue";

// // adds several style rules
// div.style.cssText = "color: blue; background: white;";

// // adds several style rules
// div.setAttribute("style", "color: blue; background: white;");

