const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the text-content!";

container.appendChild(content);

const content1 = document.createElement("p");
content1.classList.add("content1");
content1.textContent = "Hey I'm red!";
content1.style.backgroundColor = "red"; 

container.appendChild(content1);

const content2 = document.createElement("h3");
content2.classList.add("content2");
content2.textContent = "I'm a blue h3!";
content2.style.backgroundColor = "blue";

container.appendChild(content2);

const newParent = document.createElement("div");
newParent.classList.add("newParent");
newParent.style.border = "1px solid black";
newParent.style.backgroundColor = "pink";

const child1 = document.createElement("h1");
child1.classList.add("child1");
child1.textContent = "I'm in a div";

newParent.appendChild(child1);

const child2 = document.createElement("p");
child2.classList.add("child2");
child2.textContent = "ME TOO!";

newParent.appendChild(child2);

container.appendChild(newParent);
