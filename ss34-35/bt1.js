var item1 = document.createElement("div");
item1.classList.add("hu");

var item2 = document.createElement("p");
item2.textContent = "alo";

var item3 = document.createElement("a");
item3.setAttribute("href", "https://www.facebook.com/");
item3.textContent = "cc";

document.body.appendChild(item1);
document.body.appendChild(item2);
document.body.appendChild(item3);
