document
  .querySelectorAll(".event-list__dates button")
  .forEach(function (element) {
    element.addEventListener("click", function (event) {
      var target = event.target.getAttribute("data-rel");
      document
        .querySelectorAll(".event-list__dates button")
        .forEach(function (a) {
          a.classList.remove("button-tab--active");
        });
      event.target.classList.add("button-tab--active");
      document.getElementById(target).style.display = "block";
      document.querySelectorAll(".event-list__menu").forEach(function (box) {
        if (box.id !== target) {
          box.style.display = "none";
        }
      });
      event.preventDefault();
    });
  });

function moveAfterContainer(target) {
  const container = document.querySelector(`.custom-mobile-container`);
  const eventMenu = document.getElementById(`${target}`);

  if (!container || !eventMenu) {
    console.error("Required elements not found!");
    return;
  }
  container.parentNode.insertBefore(eventMenu, container.nextElementSibling);
  eventMenu.classList.add("custom-left-container");
}

function moveAfterButtonTab(target) {
  const btnTab = document.querySelector(`button[data-rel="${target}"]`);
  const eventMenu = document.getElementById(`${target}`);

  if (!btnTab || !eventMenu) {
    console.error("Required elements not found!");
    return;
  }

  btnTab.parentNode.insertBefore(eventMenu, btnTab.nextElementSibling);
  eventMenu.classList.remove("custom-left-container");
}

const mediaQuery = window.matchMedia("(max-width: 991px)");

const tabActive = document.querySelectorAll(`.button-tab`);

tabActive.forEach(function (element) {
  const target = element.getAttribute("data-rel");
  function handleMediaQueryChange(event) {
    console.log(target);
    if (event.matches) {
      moveAfterButtonTab(target);
    } else {
      moveAfterContainer(target);
    }
  }

  mediaQuery.addEventListener("change", handleMediaQueryChange);
  handleMediaQueryChange(mediaQuery);
});
