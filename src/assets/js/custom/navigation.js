// Toggle Dropdown
let dropdownMenu = document.getElementById("dropdownMenu");
const toggleDropdownMenuBtn = document.getElementById("toggleDropdownMenu");

document
  .getElementById("toggleDropdownMenu")
  .addEventListener("click", toggleDropdownMenu);

let linkIconMenu = document.querySelectorAll(".navigation__link-icon");

function toggleDropdownMenu() {
  dropdownMenu.classList.toggle("open-dropdown-menu");
  toggleDropdownMenuBtn
    .querySelector("#iconDown")
    .classList.toggle("toggle-up");
  toggleDropdownMenuBtn.querySelector("#iconDown").style.transition =
    "transform 0.5s";
  linkIconMenu.forEach((element) => {
    element.querySelector("#iconRightTop").classList.toggle("hidden");
  });
}

// Toggle Menu
let menu = document.getElementById("menu");
let toggleMenuBtn = document.getElementById("toggleMenu");

document.getElementById("toggleMenu").addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("open-menu");
  toggleMenuBtn.querySelector(".button-menu").classList.toggle("display-none");
  toggleMenuBtn
    .querySelector(".button-close")
    .classList.toggle("display-block");
}

// Styling Responsive

const mediaQuery = window.matchMedia("(max-width: 991px)");

document.querySelectorAll(".navigation__item").forEach(function (element) {
  function handleMediaQueryChange(event) {
    if (event.matches) {
      element.classList.add("custom-container");
      element
        .querySelector(".navigation__link")
        .classList.add("h4", "h4--not-responsive");
    } else {
      element.classList.remove("custom-container");
      element
        .querySelector(".navigation__link")
        .classList.remove("h4", "h4--not-responsive");
    }
  }
  mediaQuery.addEventListener("change", handleMediaQueryChange);

  handleMediaQueryChange(mediaQuery);
});

const dropdownList = document.querySelector(".navigation__dropdown-list");

function handleMediaQueryChange(event) {
  if (!event.matches) {
    dropdownList.classList.add("custom-container");
  } else {
    dropdownList.classList.remove("custom-container");
  }
}
mediaQuery.addEventListener("change", handleMediaQueryChange);

handleMediaQueryChange(mediaQuery);
