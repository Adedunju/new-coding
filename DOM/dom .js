"use strict";
const welcome = document.querySelector(".wel");
const click = document.querySelector(".click");
const formcontanier = document.querySelector(".formcontainer");
const usernameinput = document.querySelector(".username-input");
const passwordinput = document.querySelector(".password-input");
const submit = document.querySelector("#submit");
const result = document.querySelector(".result");

console.log(welcome);
click.addEventListener("click", function () {
  click.style.backgroundColor = "red";
  click.style.fontSize = "2rem";
});

click.addEventListener("click", function () {
  welcome.textContent = "This Document object Model (D.O.M)";
  welcome.style.color = "#234";
});

console.log(submit);
submit: addEventListener("click", function (event) {
  event.preventDefault();

  formcontanier.style.backgroundColor = "#4765";
  usernameinput
    ? (result.textContent = "You have successfuly logged in")
    : (result.textContent = "Error");
  // if (typeof usernameinput === "string"){
  //}else {
  //}
});
