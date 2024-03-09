"use strict";

const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
  return amount * curr;
}

function promotion(result) {
  console.log(result * discount);
}

promotion(convert(100, usdCurr));

function doNothing() {}
console.log(doNothing());

function getMathResult(a, b) {}
