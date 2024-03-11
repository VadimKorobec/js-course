"use strict";

// let str = "some";
// let strObj = new String(str);

// console.log(typeof str);
// console.log(typeof strObj);

// console.dir([1, 2, 3]);

const soldier = {
  health: 400,
  armor: 100,
  sayHello: () => {
    console.log("Hello!");
  },
};

const john = Object.create(soldier);
console.log(john);

john.sayHello();
