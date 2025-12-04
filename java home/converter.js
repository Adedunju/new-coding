"use strict";
//Cel=fah
const Celciusinput = document.getElementById("Celciusinput");
const tofahrehaits = document.getElementById("tofahrehaits");
const Celciusresult = document.getElementById("Celciusresult");

//fah=cel
const fahrehaitsinput = document.getElementById("fahrehaitsinput");
const toCelcius = document.getElementById("toCelcius");
const fahrehaitsresult = document.getElementById("fahrehaitsresult");

//convert Cel=fah
tofahrehaits.addEventListener("click", function () {
  const cel = Number(Celciusinput.value);
  console.log(cel);
  const fah = ( Number*9) / 5 + 32;
  Celciusresult.textContent = fah.toFixed(0);
});

//convert fah=cel
toCelcius.addEventListener("click", function () {
  const fah = Number(fahrehaitsinput.value);
  console.log(fah);
  const cel = ((Number - 32) *5) / 9;
  fahrehaitsresult.textContent = cel.toFixed(0);
});
