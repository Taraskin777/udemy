"use strict";

setTimeout(() => {
  console.log(1);
}, 0);
setTimeout(() => {
  console.log(2);
}, 0);
setTimeout(() => {
  console.log(4);
}, 0);
setTimeout(() => {
  console.log(3);
}, 0);

console.log(2);

//----------------

function checkMikroTasks() {
  setTimeout(() => {
    console.log("timeout - 0"); //4
  }, 0);

  let promise = Promise.resolve();
  promise
    .then(() => console.log("then1")) //2
    .then(() => console.log("then2")); //3

  console.log("sync-console-log"); //1
}

checkMikroTasks();

//-----------------------

setTimeout(() => console.log("timeout"));

Promise.resolve().then(() => console.log("promise"));

queueMicrotask(() => console.log("wow"));

Promise.resolve().then(() => console.log("promise1"));

console.log("code");








