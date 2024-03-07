// let num = 50;

// while (num < 55) {
//   console.log(num);
//   num += 1;
// }

// do {
//   console.log(num);
//   num += 1;
// } while (num < 60);

// for (let i = 0; i <= 10; i += 1) {
//   if (i % 3) {
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 0; i < 3; i += 1) {
//   console.log("i - ", i);
//   for (let j = 0; j < 3; j += 1) {
//     console.log("j - ", j);
//   }
// }
// console.log(result);

// for (let i = 0; i < 10; i += 1) {
//   console.log("*");
//   for (let j = 0; j < i; j += 1) {
//     console.log("*");
//   }
// }

// let result = "";
// const length = 7;

// for (let i = 1; i < length; i += 1) {
//   for (let j = 0; j < i; j += 1) {
//     result += "*";
//   }
//   result += "\n";
// }

// console.log(result);

// first: for (let i = 0; i < 3; i += 1) {
//   console.log(`First level ${i}`);
//   for (let j = 0; j < 3; j += 1) {
//     console.log(`Second level ${j}`);
//     for (let k = 0; k < 3; k += 1) {
//       if (k === 2) {
//         continue first;
//       }
//       console.log(`Third level ${k}`);
//     }
//   }
// }

// for (let i = 2; i <= 10; i += 1) {
//   if (i % 2) {
//     continue;
//   }
//   console.log(i);
// }

// const arrayOfNumbers = [];

// for (let i = 5; i <= 10; i += 1) {
//   arrayOfNumbers.push(i);
// }

// console.log(arrayOfNumbers);

// let i = 2;

// while (i <= 16) {
//   console.log(i);
//   i += 1;
// }

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i += 1) {
//   console.log(arr[i]);
// }

const data = [5, 10, "Shopping", 20, "Homework"];

for (let i = 0; i < data.length; i += 1) {
  console.log(data[i]);
  if (data[i] === num) {
    data[i] * 2;
  }
}
