"use strict";

//filter

// const names = ["Anna", "Taras", "Ivan", "Antuaneta"];

// const shortNames = names.filter(function (name) {
//    return name.length < 5;
// });

// console.log(shortNames);

//map

// const answers = ["IvAn", "AnnA", "Hello"];

// const result = answers.map((item) => item.toLowerCase());

// console.log(result);

//every/some

// const some = [4, 5, 8];

// console.log(some.some((item) => typeof item === "number"));true - якщо один з елементів масиву відповідає умові

// console.log(some.every((item) => typeof item === "number")); true - якщо кожен елемент масиву відповідає умові

//reduce

// const arr = [4, 5, 2, 1];

// const sumAll = arr.reduce((sum, current) => sum + current, 3);

// console.log(sumAll);

// const arr = ["apple", "pear", "peach"];

// const sumAll = arr.reduce((sum, current) => `${sum}, ${current}`);

// console.log(sumAll);

// const obj = {
//   ivan: "persone",
//   ann: "persone",
//   dog: "animal",
//   cat: "animal",
// };

// const newArr = Object.entries(obj)
//   .filter((item) => item[1] === "persone")
//   .map((item) => item[0]);

// console.log(newArr);

const films = [
  {
    name: "Titanic",
    rating: 9,
  },
  {
    name: "Die hard 5",
    rating: 5,
  },
  {
    name: "Matrix",
    rating: 8,
  },
  {
    name: "Some bad film",
    rating: 4,
  },
];

function showGoodFilms(arr) {
  return arr.filter((item) => item.rating >= 8);
}

showGoodFilms(films);

function showListOfFilms(arr) {
  return arr.reduce(
    (acc, curr) => `${typeof acc === "object" ? acc.name : acc}, ${curr.name}`
  );
}

showListOfFilms(films);

function setFilmsIds(arr) {
  return arr.map((item, i) => {
    item.id = i;
    return item;
  });
}

const tranformedArray = setFilmsIds(films);
console.log(tranformedArray);

function checkFilms(arr) {
  console.log(arr.every((item) => typeof item.id === "number"));
}

checkFilms(tranformedArray);
