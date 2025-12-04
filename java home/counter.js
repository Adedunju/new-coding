// "use strict";

// const countElement = document.getElementById("countElement");
// const decrease = document.getElementById("decrease");
// const reset = document.getElementById("reset");
// const increase = document.getElementById("increase");
// console.log(decrease);
// let count = 0;

// function dec() {
//   count--;
//   console.log(count);
//   countElement.textContent = count;
// }
// decrease.addEventListener("click", dec);

// function increaseCount() {
//   count++;
//   console.log(count);
//   countElement.textContent = count;
// }
// increase.addEventListener("click", increaseCount);

// function resetCount() {
//   count = 0;
//   console.log(count);
//   countElement.textContent = count;
// }
// reset.addEventListener("click", resetCount);

const CalculateAge = function (birthyear, currentyear) {
  return currentyear - birthyear;
};
console.log(CalAge(2006, 2025));
const currentyearinput = document.getElementById("yearinput");
const birthyearinput = document.getElementById("birthyearinput");

function CalAge() {
  let currentyear = +currentyearinput.value;
  let birthyear = +birthyearinput.value;
  let age = currentyear - birthyear;
  ageResult.textContent = age;
  const newElement = document.createElement("button");
  newElement.textContent = "DontClick";
  countContainer.appendchild(newElement);
}
clickBtn.addEventlistener("click", CalAge);
