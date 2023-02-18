const data = JSON.parse(DataInfo);

const content = document.querySelector(".content");

data.forEach(element => {
const contentBox = document.createElement("div")
const img = document.createElement("img");
const fact = document.createElement("p");
const len = document.createElement("h1");

img.src = element.img;
fact.textContent = element.fact;
len.textContent = element.len;

content.appendChild(contentBox)
contentBox.appendChild(fact);
contentBox.appendChild(len);
contentBox.appendChild(img);
});
