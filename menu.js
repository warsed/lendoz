var nav = document.querySelector(".nav");
var toggle = document.querySelector(".toggle-button");

toggle.addEventListener("click", function () {
  if (nav.classList.contains("nav-closed")) {
    nav.classList.remove("nav-closed");
    nav.classList.add("nav-opened");
  } else {
    nav.classList.add("nav-closed");
    nav.classList.remove("nav-opened");
  }
});
