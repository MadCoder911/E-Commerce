"use strict";
// Categories menu activation
const MenuIcon = document.querySelector(".cat-menu");
const menu = document.querySelector(".slider");
MenuIcon.addEventListener("click", function (e) {
  e.preventDefault();
  menu.classList.toggle("hidden");
});

let screenWidth = window.innerWidth;
if (screenWidth < 500) {
  menu.classList.add("hidden");
}

console.log(screenWidth);
