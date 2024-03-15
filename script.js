const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");
const link = document.querySelector("a");

let i = 0;

const deleteBtn = (e) => {
  console.log(e.target);
  i += 1;
  if (i === 1) {
    btn.removeEventListener("click", deleteBtn);
  }
};

btn.addEventListener("click", deleteBtn);

const clickLink = (e) => {
  e.preventDefault();
  console.log("click link");
};

link.addEventListener("click", clickLink);
