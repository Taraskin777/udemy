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

const students = [
  "Peter",
  "Andrew",
  "Ann",
  "Mark",
  "Josh",
  "Sandra",
  "Cris",
  "Bernard",
  "Takesi",
  "Sam",
];

function sortStudentsByGroups(arr) {
  arr.sort();
  const a = [];
  const b = [];
  const c = [];
  const rest = [];

  for (let i = 0; i < arr.length; i++) {
    if (i < 3) {
      a.push(arr[i]);
    } else if (i < 6) {
      b.push(arr[i]);
    } else if (i < 9) {
      c.push(arr[i]);
    } else {
      rest.push(arr[i]);
    }
  }
  return [
    a,
    b,
    c,
    `Оставшиеся студенты: ${rest.length === 0 ? "-" : rest.join(", ")}`,
  ];
}

console.log(sortStudentsByGroups(students));
