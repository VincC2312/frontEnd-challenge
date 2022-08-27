"use strict";

const modal = document.querySelector(".modal");
const submitBtn = document.getElementById("submit");
const overlay = document.querySelector(".overlay");
const rateBTN = document.querySelectorAll(".numbers");
const selectMessage = document.querySelector(".selected");
let score;

const disabledButton = function () {
  submitBtn.disabled = true;
};

disabledButton();

rateBTN.forEach((rateBTN, index) => {
  rateBTN.addEventListener("click", () => {
    score = index + 1;
    submitBtn.disabled = false;
  });
});

submitBtn.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  selectMessage.textContent = `You selected ${score} out of 5`;
});
