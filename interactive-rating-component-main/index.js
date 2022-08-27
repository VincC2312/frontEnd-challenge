"use strict";

const modal = document.querySelector(".modal");
const submitBtn = document.getElementById("submit");
const overlay = document.querySelector(".overlay");
const rateBTN = document.querySelectorAll(".numbers");
const selectMessage = document.querySelector(".selected");
let score, btnSubmit;

const init = function () {
  score = 0;
  btnSubmit = true;
  submitBtn.disabled = true;
};

init();

rateBTN.forEach((rateBTN, index) => {
  rateBTN.addEventListener("click", () => {
    score = index + 1;
  });
});

submitBtn.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
