const log = function (a, b, ...rest) {
  console.log(a, b, rest);
};

log("basic", "rest", "operator", "user");

function calcOrDouble(number, basis = 1) {
  console.log(number * basis);
}

calcOrDouble(5);
