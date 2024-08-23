"use strict";

// First, select all the class elements we will need (.modal, .overlay, .close-modal, .show-modal)and store them into variables to make next step cleaner and easier to read
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsShowModal = document.querySelectorAll(".show-modal"); // use All to select all elements with this clsss and not just the first one.

// remove 'hidden' class when any of the 3 .show-modal btns is clicked
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener("click", function () {
    // testing with clog to make sure that each show modal btn is affected with this for loop
    console.log("Button Clicked");
    modal.classList.remove("hidden"); // removing the class name of 'hidden' when the show-modal btn is clicked (by removing this class, the modal will be able to be seen)
    overlay.classList.remove("hidden"); // remove 'hidden' class on overlay
  });
}

// add 'hidden' class when the X / .close-modal btn is clicked
btnCloseModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

// add 'hidden' class when any part of the overlay is clicked
overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
