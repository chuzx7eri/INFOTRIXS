"use strict";

// Select DOM elements
const sec2 = document.querySelector(".sec2");  // Section 2 element to toggle visibility
const btnn = document.querySelector(".btnn");  // Button to toggle Section 2
const nv = document.querySelector(".nv");      // Navigation element to toggle body class
const ele = document.querySelector("body");     // Body element
const one = document.querySelector(".one");     // Element one (unused in current code)
const twoo = document.querySelector(".twoo");   // Element twoo (unused in current code)

// Add click event listener to the button to toggle visibility of Section 2
btnn.addEventListener("click", function () {
  sec2.classList.toggle("hidden");
  // Toggle the 'hidden' class on sec2 to show/hide it
});

// Add click event listener to the navigation element to toggle body class
nv.addEventListener("click", function () {
  ele.classList.toggle("nv");
  // Toggle the 'nv' class on the body to apply/remove styles
});

// Additional enhancements

// Function to check if an element has a specific class
function hasClass(element, className) {
  return element.classList.contains(className);
}

// Example of usage of hasClass function
if (hasClass(sec2, "hidden")) {
  console.log("Section 2 is currently hidden.");
} else {
  console.log("Section 2 is visible.");
}

// Optional: Add event listener to the document to close the section when clicking outside of it
document.addEventListener("click", function (event) {
  if (!sec2.contains(event.target) && !btnn.contains(event.target)) {
    sec2.classList.add("hidden");
  }
});
