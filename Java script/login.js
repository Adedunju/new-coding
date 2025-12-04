"use strict";

const username1 = document.getElementById("username");
const password1 = document.getElementById("password");
const checkuserinfo = document.getElementById("checkuserinfo");
const click = document.getElementById("click");

// login
function result() {
  // correct username and password
  const correctusername = "ziclord";
  const correctpassword = "12345678";

  // user input
  const username = username1.value;
  const password = password1.value;

  if (username !== correctusername) {
    checkuserinfo.textContent = "Wrong username!";
    checkuserinfo.style.color = "red";
  } else if (password !== correctpassword) {
    checkuserinfo.textContent = "Wrong password!";
    checkuserinfo.style.color = "red";
  } else {
    checkuserinfo.textContent = "Login successful!";
    checkuserinfo.style.color = "green";
    console.log("granted");
  }
}

click.addEventListener("click", result);
