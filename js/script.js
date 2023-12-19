// Variable to store the ID of the currently active box
let currentDivId = null;

// Find all elements with the 'select' class
const selectDropdown = document.querySelectorAll(".select");

// Function to toggle the selection state of a box
function toggleSelect(id) {
  // Get the clicked box by its ID
  const box = document.getElementById(id);

  // Find the currently active box
  const active = document.querySelector(".active");

  // Check if there is an active box
  if (active) {
    // Toggle the 'active' class on the currently active box
    active.classList.toggle("active");

    // Check if the clicked box is different from the currently active one
    if (currentDivId !== id) {
      // Toggle the 'active' class on the clicked box
      box.classList.toggle("active");
    }
  } else {
    // If no box is currently active, toggle the 'active' class on the clicked box
    box.classList.toggle("active");
  }

  // Find the radio button inside the clicked box
  const radioBtn = box.querySelector("input[name='plan']");

  // Find all elements with the 'toggleContent' class
  const allToggleContents = document.querySelectorAll(".toggleContent");

  // Find all elements with the 'input-container' class
  const radioBtnParentAll = document.querySelectorAll(".input-container");

  // Toggle the visibility of 'toggleContent' and add a border to 'input-container'
  toggleElements(allToggleContents, "show", currentDivId !== id);
  toggleElements(
    radioBtnParentAll,
    "input-container-border",
    currentDivId !== id
  );

  // Find the 'toggleContent' element inside the clicked box
  const toggleContent = box.querySelector(".toggleContent");

  // Toggle the 'show' class on 'toggleContent' and add a border to 'input-container'
  toggleClass(toggleContent, "show");
  toggleClass(radioBtn.parentNode, "input-container-border");

  // Invert the checked state of the radio button
  radioBtn.checked = !radioBtn.checked;

  // Update the current box ID
  currentDivId = id;
}

// Function to toggle the specified class on multiple elements based on a condition
function toggleElements(elements, className, condition) {
  elements.forEach((element) => {
    if (condition) {
      element.classList.remove(className);
    }
  });
}

// Function to toggle a class on a single element
function toggleClass(element, className) {
  element.classList.toggle(className);
}

// Add a click event listener to each element with the 'select' class
selectDropdown.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    // Stop the event propagation to prevent it from reaching the parent elements
    e.stopPropagation();
  });
});
