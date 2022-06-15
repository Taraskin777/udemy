"use strict";

// new RegExp('pattern', 'flags');

// /pattern/flags

// const ans = prompt("Введіть ваше число");

// const reg = /\d/g;

// console.log(ans.match(reg));

const str = "My name is R2D2";

// \d - digit
// \w - word
// \s - пробіли

console.log(str.match(/\w\d\w\d/i));
console.log(str.replace(/\w\d\w\d/i, "false"));

// \D - не числа
// \W - не букви

console.log(str.match(/\D/gi));

// flags:
// i - щось знайти незалежно від реєстру
// g - global - шукаємо всі співпадіння
// m - багаторядковий режим

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt("Password");

// console.log(pass.replace(/\./g, "*"));

// console.log('12-34-56'.replace(/-/g, ':'));

const msg = "My number +12345678, name: Oleg";

function transformMsg(str) {
  // Пропущенная часть
  // let b = str.slice(10, 19).replace('+12345678', '*****');
  // b += str.slice(-4).replace('Oleg', 'hidden');

  let a = str.replace(/\+\d{8}/, "*****");
  let b = a.replace(/\w{4}:\s\w{1,}/, "hidden");

  console.log(b);
}

transformMsg(msg);

//-----------------------------

