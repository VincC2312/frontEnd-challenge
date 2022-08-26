"use strict";

const modal = document.querySelector(".modal");
const submitBtn = document.getElementById("submit");
const overlay = document.querySelector(".overlay");
const rateBTN = document.querySelectorAll(".numbers");
const selectMessage = document.querySelector(".selected");

submitBtn.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

rateBTN.forEach((rateBTN) => {
  rateBTN.addEventListener("click", () => {});
});

submitBtn.addEventListener("click", function () {
  selectMessage.textContent = "testing";
});
