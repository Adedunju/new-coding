"use strict";

// function Multiply(a, b){
//     return a * b
// }
// console. log(Multiply(3.5, 5.6))

console.log(Math.floor(18.5));
console.log(Math.ceil(18.7));

console.log(Math.floor(-12.4));
console.log(Math.trunc(-12.4));
console.log(Math.ceil(-12.4));

console.log(Math.random());

const randomNum = Math.floor(Math.random() * 8);
console.log(randomNum);

const max = 10;
const min = 100;

function generator(){
    return Math.random() * (max * min)
}