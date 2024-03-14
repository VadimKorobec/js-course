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

// function createCounter() {
//   let counter = 0;

//   const myFunction = function () {
//     counter = counter + 1;
//     return counter;
//   };

//   return myFunction;
// }

// const increment = createCounter();

// const c1 = increment();
// const c2 = increment();
// const c3 = increment();

// console.log(c1, c2, c3);

// const result = getSum(5, 6);
// const getSum = function (a, b) {
//   return a + b;
// };

// console.log(0 || NaN || false || null);

// let x = 5;
// alert(x++);

const restorantData = {
  menu: [
    {
      name: "Salad Caesar",
      price: "14$",
    },
    {
      name: "Pizza Diavola",
      price: "9$",
    },
    {
      name: "Beefsteak",
      price: "17$",
    },
    {
      name: "Napoleon",
      price: "7$",
    },
  ],
  waitors: [
    { name: "Alice", age: 22 },
    { name: "John", age: 24 },
  ],
  averageLunchPrice: "20$",
  openNow: true,
};

function isOpen(prop) {
  const { openNow } = prop;

  let answer = "";
  openNow ? (answer = "Открыто") : (answer = "Закрыто");

  return answer;
}

console.log(isOpen(restorantData));

function isAverageLunchPriceTrue(fDish, sDish, average) {
  if (fDish.price.slice(0, -1) + sDish.price < average) {
    return "Цена ниже средней";
  } else {
    return "Цена выше средней";
  }
}

console.log(
  isAverageLunchPriceTrue(
    restorantData.menu[0],
    restorantData.menu[1],
    restorantData.averageLunchPrice
  )
);

function transferWaitors(data) {
  const copy = Object.assign({}, data);

  copy.waitors[0] = { name: "Mike", age: 32 };
  return copy;
}

transferWaitors(restorantData);
