const btn = document.querySelector(".btn");
const elem = document.querySelector(".box");
let pos = 0;
let posleft = 0;
let postop = 0;

// function myAnimation() {
//   let elem = document.querySelector(".box");
//   let pos = 0;

//   const id = setInterval(frame, 10);

//   function frame() {
//     if (pos == 300) {
//       clearInterval(id);
//       console.log(pos);
//     } else {
//       pos++;
//       elem.style.top = pos + "px";
//       elem.style.left = pos + "px";
//     }
//   }
// }

function myAnimation() {
  pos++;

  if (pos <= 600) {
    if (pos <= 300) {
      elem.style.top = pos + "px";
    } else if (pos > 300) {
      posleft++;
      elem.style.left = posleft + "px";
    }

    requestAnimationFrame(myAnimation);
  }
}

btn.addEventListener("click", () => {
  myAnimation();
});

let id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id);

// btn.addEventListener("click", () => {
//   //   const timerId = setTimeout(logger, 2000);
//   timerId = setInterval(logger, 500);
// });

// function logger() {
//   if (i === 3) {
//     clearInterval(timerId);
//   }
//   console.log("Hello");
//   i++;
// }

// let id = setTimeout(function log() {
//   console.log("Hello");
//   id = setTimeout(log, 1000);
// }, 500);
