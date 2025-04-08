// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const red = document.createElement("p");
red.classList.add("red");
red.style.color = "red"
red.textContent = "Hey, i'm red!";

container.appendChild(content);
container.appendChild(red);

