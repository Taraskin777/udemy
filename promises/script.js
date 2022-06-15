"use strict";

// console.log("Запит даних...");

// const req = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Підготовка даних...");

//     const product = {
//       name: "TV",
//       price: 2000,
//     };

//     resolve(product);
//   }, 2000);
// });

// req
//   .then((product) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         product.status = "order";
//         resolve(product);
//       }, 2000);
//     });
//   })
//   .then((data) => {
//     data.modify = true;
//     return data;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(() => {
//     console.error("Виникла помилка");
//   })
//   .finally(() => {
//     setTimeout(() => {
//       console.log("Finally!");
//     }, 2000);
//   });

const test = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
};

// test(1000).then(() => console.log("пройшла одна секунда..."));
// test(3000)
//   .then(() => console.log("пройшло три секунди..."))
//   .finally(() => {
//     setTimeout(() => {
//       console.log("код успішно виконався");
//     }, 2000);
//   });

Promise.all([test(1000), test(4000)]).then(() => {
  console.log("All");
});

Promise.race([test(1000), test(2000)]).then(() => {
  console.log("All");
});

//--------------------------------------------------

const promisify = (item, delay) =>
    new Promise(resolve => setTimeout(() => resolve(item), delay));
 
const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);
 
async function one() {
    const promises = [a(), b(), c()];
    const [outpu1, outpu2, outpu3] = await Promise.all(promises);
    return `one is done: ${outpu1} ${outpu2} ${outpu3}`;
}
 
async function two() {
    const promises = [a(), b(), c()];
    const outpu1 = await Promise.race(promises);
    return `two is done: ${outpu1}`;
}
 
async function three() {
    const outpu1 = await a();
    const outpu2 = await b();
    const outpu3 = await c();
  return `three is done: ${outpu1} ${outpu3} ${outpu2}`;
}
 
one().then(console.log);
two().then(console.log);
three().then(console.log);