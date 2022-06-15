function person() {
  let name = "Peter";

  return function displayName() {
    console.log(name);
  };
}

let peter = person();
peter();

//----------------------------

function getCounter() {
  let counter = 0;
  return function () {
    return counter++;
  };
}
let count = getCounter();

console.log(count()); // 0
console.log(count()); // 1
console.log(count()); // 2

//----------------------------------

// const makeCounter = () => {
//   let x = 0;
//   return () => {
//     return ++x;
//   };
// };
// const counter = makeCounter();
// console.log(counter());

//--------------------------------

let makeCounter = () => {
  let x = 0;
  return {
    inc: () => {
      return ++x;
    },
    dec: () => {
      return --x;
    },
    val: () => {
      return x;
    },
  };
};

let counter = makeCounter();
console.log(counter.inc()); // 1
console.log(counter.inc()); // 2
console.log(counter.inc()); // 3
console.log(counter.inc()); // 4
console.log(counter.dec()); // 3
console.log(counter.val()); // 3

//--------------------------------------


function sayHello() {
    const message = 'Привет, ';
    return function(name) {
      return message + name + '!';
    }
  }
  
  const result = sayHello(); // ƒ (name) { return message + name + '!'; }
  console.log(result('Вася')); // "Привет, Вася!"
  console.log(result('Петя')); // "Привет, Вася!"
  console.log(result('Петя')); // "Привет, Вася!"