"use strict";

const box = document.getElementById("box");
const btns = document.getElementsByTagName("button");
const circles = document.getElementsByClassName("circle");
const hearts = document.querySelectorAll(".heart");
const oneHeart = document.querySelector(".heart");

box.style.backgroundColor = "green";
box.style.width = "500px";

btns[1].style.backgroundColor = "orange";

// for (let i = 0; i <= hearts.length; i += 1) {
//   hearts[i].style.backgroundColor = "blue";
// }

hearts.forEach((item) => (item.style.backgroundColor = "blue"));

const div = document.createElement("div");

div.classList.
