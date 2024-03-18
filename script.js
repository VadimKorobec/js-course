"use strict";

// const boxesQuery = document.querySelectorAll(".box");
// const boxesGet = document.getElementsByClassName("box");

// boxesQuery.forEach((item) => console.log(item.matches(".this")));

// // console.log(boxesGet);
// // console.log(boxesQuery);

// // boxesQuery.forEach((item) => console.log(item));

// // for (let i = 0; i < boxesGet.length; i += 1) {
// //   console.log(boxesGet[i]);
// // }

// const obj = {
//   name: "Tast",
//   [Symbol("id")]: 1,
// };

// // let id = Symbol("id");
// // obj[id] = 1;

// console.log(obj);

// for (const value in obj) {
//   console.log(value);
// }

// const myAwesomeDB = {
//   movies: [],
//   actors: [],
//   id: 123,
// };

const user = {
  name: "Alex",
  surname: "Smith",
  birthday: "20/04/1993",
  showMyPublicData() {
    console.log(`${this.name} ${this.surname}`);
  },
};
