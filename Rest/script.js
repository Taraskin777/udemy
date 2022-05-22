const log = function (a, b, ...rest) {
  console.log(a, b, rest);
};

log("basic", "rest", "dsfsdfd", "dsfdsf");

function calcOrDouble(number, basis = 2) {

  console.log(number * basis);
}

calcOrDouble(3);
