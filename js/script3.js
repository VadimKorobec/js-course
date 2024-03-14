"use strict";

const box = document.getElementById("box");
const btns = document.getElementsByTagName("button");
const circles = document.getElementsByClassName("circle");
const hearts = document.querySelectorAll(".heart");
const oneHeart = document.querySelector(".heart");
const wrapper = document.querySelector(".wrapper");

console.log(wrapper);

box.style.backgroundColor = "green";
box.style.width = "500px";

btns[1].style.backgroundColor = "orange";

// for (let i = 0; i <= hearts.length; i += 1) {
//   hearts[i].style.backgroundColor = "blue";
// }

hearts.forEach((item) => (item.style.backgroundColor = "blue"));

const div = document.createElement("div");

div.classList.add("black");

wrapper.append(div);
// wrapper.appendChild(div);
// wrapper.insertBefore(div, hearts[2]);
// wrapper.prepend(div);
// hearts[0].before(div);
// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);
div.innerHTML = "<h1>Hello World!</h1>";
div.insertAdjacentHTML("afterbegin", "<h2>Hello</h2>");
