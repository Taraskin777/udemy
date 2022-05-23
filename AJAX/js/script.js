"use strict";

const inputUah = document.querySelector("#uah");
const inputUsd = document.querySelector("#usd");

inputUah.addEventListener("input", () => {
  const request = new XMLHttpRequest();

  request.open("GET", "js/current1.json");
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();

  request.addEventListener("load", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.response);
      inputUsd.value = (+inputUah.value / data.current.usd).toFixed(2);
    } else {
      inputUsd.value = "Щось пішло не так";
    }
  });

  // status
  // statusText
  // response
  // readyState
});
