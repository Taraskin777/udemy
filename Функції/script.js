// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//   return curr * amount;
// }

// function promotion(result) {
//   console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);

// function test() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//     if (i === 3) {
//       return;
//     }
//   }
//   console.log("Done");
// }

// test();

// function doNothing() { };
// console.log(doNothing() === undefined);

// function sayHello(name) {
//   return `Привет, ${name}!`;
// }

// console.log(sayHello('Jhon'));

// function returnNeighboringNumbers(num) {
//   let arr = [num - 1, num, num + 1];
//   return arr;
// }

// returnNeighboringNumbers(5);
// console.log(returnNeighboringNumbers(5));

// function getMathResult(num, times) {
//   if (typeof times !== "number" || times <= 0) {
//     return num;
//   }

//   let str = "";

//   for (let i = 1; i <= times; i++) {
//     if (i === times) {
//       str += `${num * i}`;
//     } else {
//       str += `${num * i}---`;
//     }
//   }
//   return str;
// }

// console.log(getMathResult(5, 10));

// Площа і об'єм куба

function calculateVolumeAndArea(lenght) {
  let str = "";
  let V = lenght * lenght * lenght;
  let S = 6 * lenght * lenght;

  if (typeof lenght !== "number" || lenght <= 0 || lenght % 1 !== 0) {
    str += "При вычислении произошла ошибка";
  } else {
    str += `Объем куба: ${V}, площадь всей поверхности: ${S}`;
  }

  return str;
}

console.log(calculateVolumeAndArea(15));

// Визначення номеру купе по номеру місця

function getCoupeNumber(placeNum) {
  let str = "";

  if (typeof placeNum !== "number" || placeNum < 0 || placeNum % 1 !== 0) {
    return (str += "Ошибка. Проверьте правильность введенного номера места");
  } else if (placeNum === 0 || placeNum > 36) {
    return (str += "Таких мест в вагоне не существует");
  } else {
    str += placeNum / 4;
    return Math.ceil(str);
  }
}

console.log(getCoupeNumber(20));

// Написання часу у потрібному форматі

// function getTimeFromMinutes(minutes) {
//   let time = "";
//   let getHour = Math.floor(minutes / 60);
//   let getMinutes = minutes % 60;

//   if (typeof minutes !== "number" || minutes % 1 !== 0 || minutes < 0) {
//     time += "Ошибка, проверьте данные";
//   } else {
//     switch (getHour) {
//       case 0:
//         time = "часов";
//         break;
//       case 1:
//         time = "час";
//         break;
//       case 2:
//       case 3:
//       case 4:
//         time = "часа";
//         break;
//       default:
//         time = "часов";
//      }
//      time = `Это ${getHour} ${time} и ${getMinutes} минут`;
//   }

//    return time;
// }

// console.log(getTimeFromMinutes(200));

// Функція, яка приймає 4 числа і повертає найбільше. Якщо одне з них не число - повертається 0

// function findMaxNumber(a, b, c, d) {
//   if (
//     typeof a !== "number" ||
//     typeof b !== "number" ||
//     typeof c !== "number" ||
//     typeof d !== "number"
//   ) {
//     return 0;
//   } else {
//     return Math.max(a, b, c, d);
//   }
// }

// console.log(findMaxNumber(1, 40, 3, 4));

// Задача на числа Фібоначчі

function fib(n) {
  let str = "";
  let a = 0;
  let b = 1;

  if (typeof n !== "number" || n % 1 !== 0 || n < 0) {
    return "";
  } else {
    for (let i = 0; i < n; i++) {
      if (i + 1 === n) {
        str += `${a}`;
      } else {
        str += `${a} `;
        let c = a + b;
        a = b;
        b = c;
      }
    }
  }
  return str;
}

console.log(fib(7));
