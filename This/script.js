"use strict";

//1) Звичайна функція: this = window, але якщо use strict - тоді буде undefined

// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return a + b;
//   }

//   console.log(sum());
// }

// showThis(4, 5);

// -------------------

//2) Контекст у методів об'єкту - сам об'єкт. Але якщо функція запускається всередині методу, тоді контекст виклику губиться.

// const obj = {
//   a: 20,
//   b: 15,
//   sum: function () {
//     function shout() {
//       console.log(this);
//     }
//     shout();
//   },
// };

// obj.sum();

// --------------------------------

//3) this в конструкторах і класах - це новий екземпляр об'єкту

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.numan = true;
// }

// let ivan = new User("Ivan", 23);

// ---------------------------------------

//4) ручна прив'язка this : call, apply, bind

// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }

// const user = {
//   name: "John",
// };

// sayName.call(user, "Smith");
// sayName.apply(user, ["Smith"]);

// function count(num) {
//   return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

// ------------------------------------

const btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
  
  e.target.style.backgroundColor = "red";
});

// стрілкова функція не має свого контексту виклику, а бере його в батьківського елемента

const obj = {
  num: 5,
  sayNumber: function () {
    const say = () => {
      console.log(this.num);
    };
    say();
  },
};

obj.sayNumber();

const double = (a) => a * 2;
console.log(double(4));
