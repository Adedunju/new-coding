"use strict";
function calcAge(birthYear) {
  console.log(2025 - birthYear);
}

calcAge(2005);

function sum(a, b, c) {
  console.log(a + b);
}

sum(20, 13);

function multiply(a, s) {
  console.log(a * s);
}
multiply(10 * 20);

function divide(x, y) {
  console.log(x / y);
}
divide(5 / 25);

function subtract(m, n) {
  console.log(m - n);
}
subtract(50 - 25);

// // const sum2 = function (2,9) {
// // console.log(sum2);

// // const nameresult = prompt("What is your name?");
// // console.log(nameresult);

const calcvolt = function (current, resistance = 10) {
  return `${current * resistance} volt`;
};
console.log(calcvolt(50));

const calcCurrent = function (volt, resistance = 5) {
  return `${volt / resistance} ampere`;
};
console.log(calcCurrent(30));

const calcResistance = function (volt, current = 10) {
  return `${volt / current} ohm`;
};
console.log(calcResistance(100));

function hello(name) {
  return `Hello ${name} welcomne to the team`;
}
console.log(hello("Isaac"));

let score = 0;
function display() {
  console.log(score++);
}
console.log(display());
console.log(display());
console.log(display());
console.log(display());

console.log(`function called ${score++} times`);

const callBack = function (callBack) {
  return callBack;
};

// callBack(add());
// callBack(add());
// callBack(add());

const greet = (num) => {
  console.log(`Hello ${num}`);
};

greet("Isaac");


