"use strict";

// let str = "some";
// let strObj = new String(str);

// console.log(typeof str);
// console.log(typeof strObj);

// console.dir([1, 2, 3]);

// const soldier = {
//   health: 400,
//   armor: 100,
//   sayHello: () => {
//     console.log("Hello!");
//   },
// };

// const john = Object.create(soldier);
// console.log(john);

// john.sayHello();
// console.log(typeof String(null));
// console.log(typeof String(4));
// console.log(typeof (5 + ""));

// const num = 5;

// console.log(`https://vk.com/catalog/${num}`);

// const fontSize = 26 + "px";

// console.log(fontSize);

// console.log(typeof Number("4"));
// console.log(typeof +"4");
// console.log(typeof parseInt("15px", 10));

// let switcher = null;

// if (switcher) {
//   console.log("Working ...");
// }

// let number = 5;
// debugger;

// function logNumber() {
//   let number = 4;
//   debugger;
//   console.log(number);
// }

// number = 6;

// logNumber();
// debugger;

function createCounter() {
  let counter = 0;

  const myFunction = function () {
    counter = counter + 1;
    return counter;
  };

  return myFunction;
}

const increment = createCounter();

const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);

const result = getSum(5, 6);
const getSum = function (a, b) {
  return a + b;
};

console.log(0 || NaN || false || null);
