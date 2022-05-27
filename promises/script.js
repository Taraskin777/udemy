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
