const media = window.matchMedia("(max-width: 991px)");

const collapseBtnMenu = document.getElementById("collapseBtnMenu");

media.addListener(function (media) {
  if (media.matches) {
    collapseBtnMenu.classList.add("collapse");
  } else {
    collapseBtnMenu.classList.remove("collapse");
  }
});
