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

const btn = document.querySelectorAll("button");

btn.forEach((button) => {
    button.addEventListener("click", () => {
        alert("Hi mate!" + " " + button.id);
    });
})




