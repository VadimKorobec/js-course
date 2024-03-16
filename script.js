// const btn = document.querySelector("button");
// const overlay = document.querySelector(".overlay");
// const link = document.querySelector("a");

// let i = 0;

// const deleteBtn = (e) => {
//   console.log(e.target);
//   i += 1;
//   if (i === 1) {
//     btn.removeEventListener("click", deleteBtn);
//   }
// };

// btn.addEventListener("click", deleteBtn);

// const clickLink = (e) => {
//   e.preventDefault();
//   console.log("click link");
// };

// link.addEventListener("click", clickLink);

// console.log(document.body);
// console.log(document.body.firstElementChild);
// // console.log(document.body.lastChild);

// console.log(document.querySelector("#current").parentElement.parentElement);
// console.log(document.querySelector("[data-current='3']").nextElementSibling);

// for (const node of document.body.childNodes) {
//   if (node.nodeName === "#text") {
//     continue;
//   }
//   console.log(node);
// }

// const pow = (x, n) => {
//   let result = 1;
//   for (let i = 0; i < n; i += 1) {
//     result *= x;
//   }
//   return result;
// };

// console.log(pow(2, 3));

let students = {
  js: [
    {
      name: "John",
      progress: 100,
    },
    {
      name: "Ivan",
      progress: 60,
    },
  ],
  html: {
    basic: [
      {
        name: "Peter",
        progress: 20,
      },
      {
        name: "Anna",
        progress: 18,
      },
    ],
    pro: [
      {
        name: "Sam",
        progress: 10,
      },
    ],
  },
};

// const a = students.js;
// const b = students.html.basic;
// const c = students.html.pro;

// const arr = [...a, ...b, ...c];
// console.log(arr);

function getTotalProgressByIteration(data) {
  let total = 0;
  let students = 0;

  for (const course of Object.values(data)) {
    if (Array.isArray(course)) {
      students += course.length;
      for (let i = 0; i < course.length; i += 1) {
        total += course[i].progress;
      }
    } else {
      for (const subCourse of Object.values(course)) {
        students += subCourse.length;
        for (let i = 0; i < subCourse.length; i += 1) {
          total += subCourse[i].progress;
        }
      }
    }
  }

  return total / students;
}

console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
  if (Array.isArray(data)) {
    let total = 0;
    for (let i = 0; i < data.length; i += 1) {
      total += data[i].progress;
    }
    return [total, data.length];
  } else {
    let total = [0, 0];
    for (const subData of Object.values(data)) {
      const subDataArr = getTotalProgressByRecursion(subData);
      total[0] += subDataArr[0];
      total[1] += subDataArr[1];
    }
    return total;
  }
}

console.log(getTotalProgressByRecursion(students));
