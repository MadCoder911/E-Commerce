"use strict";
// Categories menu activation
const MenuIcon = document.querySelector(".cat-menu");
const menu = document.querySelector(".slider");
MenuIcon.addEventListener("click", function (e) {
  e.preventDefault();
  menu.classList.toggle("hidden");
});

let productView = document.querySelector(".product-view");
let screenWidth = window.innerWidth;
if (screenWidth < 500) {
  menu.classList.add("hidden");
  productView.style.backgroundImage =
    "url(https://i.ibb.co/BcYr351/landing-Mobile-View.png)";
}
console.log(screenWidth);
console.log(productView);
