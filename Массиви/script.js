// Завдання 1

// const family = ["Peter", "Ann", "Alex", "Linda"];

// function showFamily(arr) {
//   let str;

//   if (arr.length === 0) {
//     str = "Семья пуста";
//   } else {
//     str = "Семья состоит из: " + arr.join(" ");
//   }
//   return str;
// }

// console.log(showFamily(family));

// Завдання 2

// const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

// function standardizeStrings(arr) {
//    arr.forEach((el) => console.log(el.toLowerCase()));
// }

// standardizeStrings(favoriteCities);

// const test = [2, 5, 10];

// const result = test.forEach((el) => console.log(el * 2));

// const testObj = { 1: 2, 2: 5, 3: 10 };

// const values = Object.values(testObj).forEach((el)=>console.log(el*2));

// console.log(values.forEach(el));

// Завдання 3

// const someString = "This is some strange string";

// function reverse(str) {
//   if (typeof str !== "string") {
//     return "Ошибка!";
//   } else {
//     return str.split("").reverse().join("");
//   }
// }

// console.log(reverse(someString));

// Завдання 4

const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];

function availableCurr(arr, missingCurr) {
  let str = "";
  let indexMissingCurr = arr.indexOf(missingCurr);
  if (indexMissingCurr !== -1) {
    arr.splice(indexMissingCurr, 1);
  }
  if (arr.length === 0) {
    str = "Нет доступных валют";
  } else {
    str += `Доступные валюты: \n${arr.join("\n")}` + " ";
  }
  return str;
}

availableCurr(baseCurrencies.concat(additionalCurrencies), "UAH");
