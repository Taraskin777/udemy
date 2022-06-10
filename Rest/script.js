const log = function (a, b, ...rest) {
  console.log(a, b, rest);
};

log("basic", "rest", "dsfsdfd", "dsfdsf");

function calcOrDouble(number, basis = 2) {
  console.log(number * basis);
}

calcOrDouble(3);

//композиція функцій

const multiply20 = (price) => price * 20;

const divide100 = (price) => price / 100;

const normalizePrice = (price) => price.toFixed(2);

// const discount = normalizePrice(divide100(multiply20(200)));

// console.log(discount);

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((res, fn) => fn(res), x);

const discount = compose(normalizePrice, divide100, multiply20);

console.log(discount(200));
