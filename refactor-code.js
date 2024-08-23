"use strict";

// modal buttons
const modal1Btn = document.querySelector("#modal-1-btn");
const modal2Btn = document.querySelector("#modal-2-btn");
const modal3Btn = document.querySelector("#modal-3-btn");

// modal windows
const modal1 = document.querySelector("#modal-1");
const modal2 = document.querySelector("#modal-2");
const modal3 = document.querySelector("#modal-3");

// all modals
const allModals = document.querySelectorAll(".modal");
const closeModal = document.querySelectorAll(".close-modal");
const overlay = document.querySelector(".overlay");

// create DRY function to open modals
const openModal = function (modalBtn, modalID) {
  modalBtn.addEventListener("click", function () {
    modalID.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
};

// show modal 1
openModal(modal1Btn, modal1);

// show modal 2
openModal(modal2Btn, modal2);

// show modal 3
openModal(modal3Btn, modal3);
