"use strict";

// const options = {
//   name: "test",
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: "black",
//     bg: "red",
//   },
//   makeTest: () => {
//     console.log("test");
//   },
// };

// options.makeTest();

// const { border, bg } = options.colors;
// console.log(bg);

// console.log(Object.values(options).length);

// console.log(options.name);

// options.colors.border = "white";

// console.log(options.colors.border);

// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       console.log(`${i} : ${options[key][i]}`);
//     }
//   } else {
//     console.log(`${key} : ${options[key]}`);
//   }
// }

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// arr.pop();
// console.log(arr);

// arr.push(8);
// console.log(arr);

// for (let i = 0; i <= arr.length; i += 1) {
//   console.log(arr[i]);
// }

// for (const i of arr) {
//   console.log(i);
// }

let sum = 0;

arr.forEach((item, idx, arr) => console.log(`${idx} - ${item} - ${arr}`));

const map = arr.map((item) => item * 2);
console.log(map);

const filter = arr.filter((item) => item % 2 !== 0);
console.log(filter);

const str = prompt();
const products = str.split(" ");
console.log(products);
