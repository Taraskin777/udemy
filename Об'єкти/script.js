"use strict";

// Завдання 1

// const personalPlanPeter = {
//   name: "Peter",
//   age: "29",
//   skills: {
//     languages: ["ru", "eng"],
//     programmingLangs: {
//       js: "20%",
//       php: "10%",
//     },
//     exp: "1 month",
//   },
//   showAgeAndLangs(plan) {
//     let str = "";
//     const { age } = plan;
//     let str1 = `Мне ${age} и я владею языками: `;
//     const { languages } = plan.skills;
//     for (let key in languages) {
//       str += `${languages[key]}`.toUpperCase() + " ";
//     }
//     return str1 + str + " ";
//   },
// };

// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// function showExperience(plan) {
//    const { exp } = plan.skills;
//    let str = exp;
//    str += "";
//   return str;
// }

// showExperience(personalPlanPeter);

// завдання 2

// function showProgrammingLangs(plan) {
//   let str = "";
//   const { programmingLangs } = plan.skills;
//   for (let key in programmingLangs) {
//     str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//   }
//   return str;
// }

// console.log(showProgrammingLangs(personalPlanPeter));

// ===================

// Об'єм і бюджет

// const shoppingMallData = {
//   shops: [
//     {
//       width: 10,
//       length: 5,
//     },
//     {
//       width: 15,
//       length: 7,
//     },
//     {
//       width: 20,
//       length: 5,
//     },
//     {
//       width: 8,
//       length: 10,
//     },
//     {
//       width: 10,
//       length: 20,
//     },
//   ],
//   height: 5,
//   moneyPer1m3: 30,
//   budget: 100000,
// };

// function isBudgetEnough(data) {
//   let square = 0;
//   let volume = 0;

//   data.shops.forEach((el) => {
//     square += el.width * el.length;
//   });
//   console.log(square);

//   volume = data.height * square;
//   console.log(volume);

//   if (data.moneyPer1m3 * volume <= data.budget) {
//     console.log("Нужно денег: " + data.moneyPer1m3 * volume);
//     console.log("Бюджет: " + data.budget);
//     return "Бюджета достаточно";
//   } else {
//     console.log("Нужно денег: " + data.moneyPer1m3 * volume);
//     console.log("Бюджет: " + data.budget);
//     return "Бюджета недостаточно";
//   }
// }

// console.log(isBudgetEnough(shoppingMallData));

// ===========================================

// У вас є список учнів, які хочуть пограти гру. Але команд може бути тільки 3 по 3 людини в команді. Написати функцію, яка приймає в себе масив рядків. Всередині вона спочатку сортує імена по алфавіту. Як підсумок, вона повертає новий масив з трьома командами і рядком як 4-й елемент.

// const students = [
//   "Peter",
//   "Andrew",
//   "Ann",
//   "Mark",
//   "Josh",
//   "Sandra",
//   "Cris",
//   "Bernard",
//   "Takesi",
//   "Sam",
// ];

// function sortStudentsByGroups(arr) {
//   arr.sort();
//   const a = [];
//   const b = [];
//   const c = [];
//   const rest = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i < 3) {
//       a.push(arr[i]);
//     } else if (i < 6) {
//       b.push(arr[i]);
//     } else if (i < 9) {
//       c.push(arr[i]);
//     } else {
//       rest.push(arr[i]);
//     }
//   }
//   return [
//     a,
//     b,
//     c,
//     `Оставшиеся студенты: ${rest.length === 0 ? "-" : rest.join(", ")}`,
//   ];
// }

// console.log(sortStudentsByGroups(students));

// Пошук помилок

// const restorantData = {
//   menu: [
//     {
//       name: "Salad Caesar",
//       price: "14$",
//     },
//     {
//       name: "Pizza Diavola",
//       price: "9$",
//     },
//     {
//       name: "Beefsteak",
//       price: "17$",
//     },
//     {
//       name: "Napoleon",
//       price: "7$",
//     },
//   ],
//   waitors: [
//     { name: "Alice", age: 22 },
//     { name: "John", age: 24 },
//   ],
//   averageLunchPrice: "20$",
//   openNow: true,
// };

// function isOpen(prop) {
//   let answer = "";
//   prop ? (answer = "Открыто") : (answer = "Закрыто");

//   return answer;
// }

// console.log(isOpen(restorantData.openNow));

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//   if (
//     +fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) <
//     +average.slice(0, -1)
//   ) {
//     console.log(+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)));
//     return "Цена ниже средней";
//   } else {
//     console.log(+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)));
//     return "Цена выше средней";
//   }
// }

// console.log(
//   isAverageLunchPriceTrue(
//     restorantData.menu[1],
//     restorantData.menu[3],
//     restorantData.averageLunchPrice
//   )
// );

// function transferWaitors(data) {
//   const copy = Object.assign({}, data);
//   copy.waitors = [{ name: 'Mike', age: 32 }, { name: 'Jhon', age: 22 }];
//   return copy;
// }

// transferWaitors(restorantData);

const user = {
  name: "Alex",
  surname: "Smith",
  birthday: "20/04/1993",
  showMyPublicData: function () {
    console.log(`${this.name} ${this.surname}`);
  },
};

for (const key in user) {
  console.log(user[key]);
}

const arr = ["b", "a", "c"];
Array.prototype.someMethod = function () {};

for (const key of arr) {
  console.log(key);
}

// const str = 'string';

// for (const key in str) {
//    console.log(str[key]);
//  }

const salaries = {
  john: 500,
  ivan: 1000,
  ann: 5000,
  sayHello: function () {
    console.log("Hello");
  },
};

salaries[Symbol.iterator] = function () {
  return {
    current: this.john,
    last: this.ann,

    next() {
      if (this.current < this.last) {
        this.current = this.current + 500;
        return {
          done: false,
          value: this.current,
        };
      } else {
        return { done: true };
      }
    },
  };
};

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());


// for (let res of salaries) {
//    console.log(res);
// }