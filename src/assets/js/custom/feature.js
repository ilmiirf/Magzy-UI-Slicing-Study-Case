function moveAfterBlogContent(target) {
  const writer = document.getElementById(`writer-feature-${target}`);
  const blogContent = document.getElementById(`content-feature-${target}`);

  if (!writer || !blogContent) {
    console.error("Required elements not found!");
    return;
  }

  blogContent.parentNode.insertBefore(writer, blogContent.nextElementSibling);
}

function moveAfterImage(target) {
  const writer = document.getElementById(`writer-feature-${target}`);
  const image = document.getElementById(`image-feature-${target}`);

  if (!writer || !image) {
    console.error("Required elements not found!");
    return;
  }

  image.parentNode.insertBefore(writer, image.nextElementSibling);
}

const mediaQuery = window.matchMedia("(max-width: 991px)");

document.querySelectorAll(".carousel-item").forEach(function (element) {
  var target = element.getAttribute("data-feature");
  function handleMediaQueryChange(event) {
    if (event.matches) {
      moveAfterBlogContent(target);
    } else {
      moveAfterImage(target);
    }
  }

  mediaQuery.addEventListener("change", handleMediaQueryChange);

  handleMediaQueryChange(mediaQuery);
});
