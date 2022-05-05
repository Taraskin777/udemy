"use strict";

// let result = "";
// const lenght = 20;

// for (let i = 1; i < lenght; i++) {
//   for (let j = 0; j < i; j++) {
//     result += "*";
//   }
//   result += "\n";
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//   console.log(`first level:${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`second level:${j}`);
//     for (let k = 0; k < 3; k++) {
//       if (k === 2) continue first;
//       console.log(`third level:${k}`);
//     }
//   }
// }

// 1; //
// console.log("Задача 1");

// for (let i = 5; i <= 10; i++) {
//   console.log(i);
// }

// 2; //
// console.log("Задача 2");

// for (let i = 20; i >= 10; i--) {
//   console.log(i);
//   if (i === 14) {
//     break;
//   }
// }

// 3; //
// console.log("Задача 3");

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// 4; //
// console.log("Задача 4");

// let i = 1;

// while (i < 16) {
//   i++;
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// //5

// console.log("Задача 5");

// const arrayOfNumbers = [];

// for (let i = 5; i <= 10; i++) {
//   arrayOfNumbers[i - 5] = i;
// }

// console.log(arrayOfNumbers);

// 1

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < 7; i++) {
//   result[i] = arr[i];
// }

// console.log(result);

// 2; //

// const data = [5, 10, "Shopping", 20, "Homework"];

// for (let i = 0; i < 5; i++) {
//   if (typeof data[i] === "number") {
//     data[i] = data[i] * 2;
//   } else {
//     data[i] += "-done";
//   }
// }

// console.log(data);

// 3; //

// const data = [5, 10, "Shopping", 20, "Homework"];
// const result = [];

// for (let i = 4; i >= 0; i--) {
//   result[4-i] = data[i];
// }
// console.log(result);

// Ялинка

// const lines = 5;
// let result = "";

// for (let i = 0; i <= lines; i++) {
//   for (let j = 0; j < lines - i; j++) {
//     result += " ";
//   }
//   for (let j = 0; j < 2 * i + 1; j++) {
//      result += "*";
//   }
//   result += "\n";
// }

// console.log(result);

// Простий count

// import React, { useState } from "react";

// export const Count = () => {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);
//   const [count3, setCount3] = useState(0);

//   const changeCountButton1 = () => {
//     setCount1(count1 + 1);
//   };
//   const changeCountButton2 = () => {
//     setCount2(count2 + 1);
//   };
//   const changeCountButton3 = () => {
//     setCount3(count3 + 1);
//   };

//   const resetCount = () => {
//     setCount1(count1 - count1);
//     setCount2(count2 - count2);
//     setCount3(count3 - count3);
//   };

//   return (
//     <>
//       <div className="button">
//         <button onClick={() => changeCountButton1()}>
//           Change count ({count1})
//         </button>
//         <button onClick={() => changeCountButton2()}>
//           Change count ({count2})
//         </button>
//         <button onClick={() => changeCountButton3()}>
//           Change count ({count3})
//         </button>
//       </div>
//       <div className="Reset">
//         <button onClick={() => resetCount()}>Reset</button>
//       </div>
//     </>
//   );
// };

// Конвертор валют

// export const productsArray = [
//   {
//     id: 1,
//     name: "Iphone 12",
//     description: "This is iPhone 12...",
//     price: 750,
//     button: "Buy"
//   },
//   {
//     id: 2,
//     name: "Iphone 8",
//     description: "This is iPhone 8...",
//     price: 850,
//     button: "Buy"
//   },
//   {
//     id: 3,
//     name: "Iphone X",
//     description: "This is iPhone X...",
//     price: 1250,
//     button: "Buy"
//   }
// ];

// let initialValue = 0;
// let pricesumm = productsArray.reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue.price;
// }, initialValue);

// console.log(pricesumm);

// import React from "react";
// import { productsArray } from "./productsArray";
// import { ProductsListItem } from "./ProductsListItem";
//
// export const ProductsList = () => {
//   let initialValue = 0;
//   let pricesumm = productsArray.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue.price;
//   }, initialValue);
//
//   return (
//     <>
//       <h1>Our shop page</h1>
//       <div>
//         <button>EUR</button>
//         <button>USD</button>
//         <button>UAH</button>
//         <button>PLN</button>
//       </div>
//       <div className="row">
//         {productsArray.map(({ id, name, description, price, button }) => (
//           <div className="product">
//             <ProductsListItem
//               id={id}
//               name={name}
//               description={description}
//               price={price}
//               button={button}
//             />
//           </div>
//         ))}
//       </div>
//       <div>Total: {pricesumm}</div>
//     </>
//   );
// };

// import React from "react";
//
// export const ProductsListItem = ({ id, name, description, price, button }) => {
//   return (
//     <>
//       <div className="name text">{name}</div>
//       <div className="description text">{description}</div>
//       <div className="price text">EUR {price}</div>
//       <button className="button text">{button}</button>
//     </>
//   );
// };

// .App {
//   font-family: sans-serif;
//   text-align: center;
// }
//
// .row {
//   display: flex;
//   justify-content: center;
//   margin: 50px;
// }
//
// .name {
//   font-size: 20px;
// }
//
// .text {
//   margin: 15px;
// }

const arr = ["a", "b", "c", "d"];
const sliced = arr.slice(0);

console.log(sliced);

let newArr = sliced.pop();

console.log(sliced);

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2];
console.log(arr1);