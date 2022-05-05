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
