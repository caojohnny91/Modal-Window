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
const closeModalBtns = document.querySelectorAll(".close-modal");
const overlay = document.querySelector(".overlay");

// create DRY function to open modals
const openModal = function (modalBtn, modalID) {
  modalBtn.addEventListener("click", function () {
    modalID.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
};

// open modal windows
openModal(modal1Btn, modal1);
openModal(modal2Btn, modal2);
openModal(modal3Btn, modal3);

// Function to close all modals and the overlay
const closeModals = function () {
  allModals.forEach(function (modal) {
    modal.classList.add("hidden");
  });
  overlay.classList.add("hidden");
};

// Close modals when close-modal buttons are clicked
for (let i = 0; i < closeModalBtns.length; i++) {
  closeModalBtns[i].addEventListener("click", function () {
    closeModals();
  });
}

// Close modals when overlay is clicked
overlay.addEventListener("click", function () {
  closeModals();
});

// add event listener when escape key is pressed
document.addEventListener("keydown", function (event) {
  //   console.log(event); // KeyboardEvent {isTrusted: true, key: 'Escape', code: 'Escape', location: 0, ctrlKey: false, …}

  if (event.key === "Escape") {
    let anyModalOpen = false;
    console.log("Escape Key Pressed");

    // Check if any modal is open
    allModals.forEach(function (modal) {
      if (!modal.classList.contains("hidden")) {
        anyModalOpen = true;
      }
    });

    // If any modal is open, close all modals
    if (anyModalOpen) {
      closeModals();
    }
  }
});
