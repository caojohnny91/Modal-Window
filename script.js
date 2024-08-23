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
// btnCloseModal.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

// add 'hidden' class when any part of the overlay is clicked
// overlay.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

// Instead of writing the same code twice like above, create a function to make it DRY
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// then add this closeModal function as an arugument to the appropriate eventListener
btnCloseModal.addEventListener("click", closeModal); // DO NOT add () after closeModal, if you do it will immediately call that function, instead of waiting for the click event
overlay.addEventListener("click", closeModal);

// we can also create an openModal function and do the same for the eventListener above

// create global event on that will listen on the whole document like the keyboard event here
// no matter where you are on the page, this will always trigger the specified event
// other key events: 'keypress': when it is help down, 'keyup': when the key is released, 'keydown': when the key is pressed down
document.addEventListener("keydown", function (event) {
  // first log event to find info on the object when you press the key
  //   console.log(event); // KeyboardEvent {isTrusted: true, key: 'Escape', code: 'Escape', location: 0, ctrlKey: false, …}

  // create if statement for when the event.key is the 'Escape' button and if the modal class does NOT contain the hidden class
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    console.log("Escape button was pressed");
    // then call the close modal function with ()
    closeModal();
  }
});
