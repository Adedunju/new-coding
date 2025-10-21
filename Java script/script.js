"use strict";

let firstname = "Dave"; // strings
console.log(firstname, typeof firstname);

let x = 12; // numbers
console.log(x, typeof x);

let isstudent = true; //Boolean
console.log(isstudent, typeof isstudent);

let empty = null; //null
console.log(empty, typeof empty);

let students; //undefind
console.log(students, typeof students);

let big = 4000n;
console.log(big, typeof big);

//Non primative dataType
const fruits = ["apple", "orange", "grapes", "mango"];
console.log(fruits);

const us = {
  name: "Isaac",
  age: 18,
  color: "dark",
};
console.log(us, typeof us);

let time = +"12";
console.log(time, typeof time);
const period = 12;
console.log(time + period);
console.log(time - period);

time = Number(time);
console.log(time, typeof time);
console.log(time === period);
console.log(time == period);
const weekday =4
if (weekday === 1) {
  console.log("Monday");
} else if (weekday === 2) {
  console.log("Tuesday");
} else if (weekday === 3) {
  console.log("Wednesday");
} else if (weekday === 4) {
  console.log("Thursday");
} else if (weekday === 5) {
  console.log("Friday");
} else if (weekday === 6) {
  console.log("Saturday");
} else if (weekday === 7) {
  console.log("Sunday");
} else {
  console.log("Invalid weekday");
} 
const day = 1
switch(day) {

}  


for (let index = 0; index < 10; index++) {
  console.log(index);
}
 