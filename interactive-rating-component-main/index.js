"use strict";

const modal = document.querySelector(".modal");
const submitBtn = document.getElementById("submit");
const overlay = document.querySelector(".overlay");
const rateBTN = document.querySelectorAll(".numbers");

submitBtn.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

for (let i = 0; i < rateBTN.length; i++) {
  rateBTN[i].addEventListener("click", function () {});
}
