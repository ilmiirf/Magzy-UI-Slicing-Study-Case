let dropdownMenu = document.getElementById("dropdownMenu");

document
  .getElementById("toggleDropdownMenu")
  .addEventListener("click", toggleDropdownMenu);

function toggleDropdownMenu() {
  dropdownMenu.classList.toggle("open-dropdown-menu");
}
