"use strict";
const sec2 = document.querySelector(".sec2");
const btnn = document.querySelector(".btnn");
const nv = document.querySelector(".nv");
const ele = document.querySelector("body");
const one = document.querySelector(".one");
const twoo = document.querySelector(".twoo");
btnn.addEventListener("click", function () {
  sec2.classList.toggle("hidden");
});
nv.addEventListener("click", function () {
  ele.classList.toggle("nv");
});
