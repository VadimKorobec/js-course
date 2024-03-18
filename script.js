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

// const user = {
//   name: "Alex",
//   surname: "Smith",
//   showMyPublicData() {
//     console.log(`${this.name} ${this.surname}`);
//   },
// };

// Object.defineProperty(user, "birthday", {
//   value: prompt("Write your birthday", ""),
//   enumerable: true,
//   configurable: true,
// });

// console.log(Object.getOwnPropertyDescriptor(user, "birthday"));

// Object.defineProperty(user, "showMyPublicData", { enumerable: false });

// for (const key in user) {
//   console.log(key);
// }

// Object.defineProperties(user, {
//   name: { writable: false },
//   surname: { writable: false },
// });

// console.log(user);

//writable
//enumerable
//configurable

// const user = {
//   name: "Alex",
//   surname: "Smith",
//   birthday: "20/04/1993",
//   showMyPublicData() {
//     console.log(`${this.name} ${this.surname}`);
//   },
// };

// for (const key of Object.keys(user)) {
//   console.log(user[key]);
// }

// const arr = ["b", "a", "c"];

// for (const key of arr) {
//   console.log(key);
// }

// const str = "Mango";

// for (const key in str) {
//   console.log(str[key]);
// }

// const salaries = {
//   john: 500,
//   ivan: 1000,
//   anna: 5000,
//   sayHello() {
//     console.log("Hello");
//   },
// };

// const values = Object.values(salaries);

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total);

// const data = {};

// data.first = 1;
// data.second = 2;

// console.log(data);

const user = {
  name: "Alex",
  surname: "Smith",
  birthday: "20/04/1993",
  showMyPublicData() {
    console.log(`${this.name} ${this.surname}`);
  },
};

const userMap = new Map(Object.entries(user));
console.log(userMap);

const shops = [{ rise: 500 }, { oil: 200 }, { bread: 50 }];

const budget = [5000, 15000, 25000];

const map = new Map([[{ paper: 400 }, 8000]]);

shops.forEach((item, i) => map.set(item, budget[i]));

console.log(map);

const goods = [];

for (const shop of map.keys()) {
  goods.push(Object.keys(shop)[0]);
}

console.log(goods);

for (const price of map.values()) {
  console.log(price);
}

for (const [name, value] of map.entries()) {
  console.log(value, name);
}

// map.set(shops[0], 5000);
// map.set(shops[1], 10000);
// map.set(shops[2], 20000);

// console.log(map.get(shops[0]));
// console.log(map.has(shops[2]));
