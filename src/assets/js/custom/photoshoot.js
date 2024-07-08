function moveAfterInformation(target) {
  const information = document.getElementById(`photoshootInformation${target}`);
  const PhotoshootImgList = document.getElementById(
    `photoshootImgList${target}`
  );

  if (!information || !PhotoshootImgList) {
    console.error("Required elements not found!");
    return;
  }

  information.parentNode.insertBefore(
    PhotoshootImgList,
    information.nextElementSibling
  );
}

function moveAfterTitle(target) {
  const title = document.getElementById(`photoshootTitle${target}`);
  const PhotoshootImgList = document.getElementById(
    `photoshootImgList${target}`
  );

  if (!title || !PhotoshootImgList) {
    console.error("Required elements not found!");
    return;
  }

  title.parentNode.insertBefore(PhotoshootImgList, title.nextElementSibling);
}

const mediaQuery = window.matchMedia("(max-width: 991px)");

document.querySelectorAll(".photoshoot__wrapper").forEach(function (element) {
  var target = element.getAttribute("data-photoshoot");
  function handleMediaQueryChange(event) {
    if (event.matches) {
      moveAfterTitle(target);
    } else {
      moveAfterInformation(target);
    }
  }

  mediaQuery.addEventListener("change", handleMediaQueryChange);

  handleMediaQueryChange(mediaQuery);
});
