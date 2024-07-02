document.querySelectorAll('.event-list__dates div').forEach(function (element) {
  element.addEventListener('click', function (event) {
    var target = event.target.getAttribute('data-rel');
    document.querySelectorAll('.event-list__dates div').forEach(function (a) {
      a.classList.remove('button-tab--active');
    });
    event.target.classList.add('button-tab--active');
    document.getElementById(target).style.display = 'block';
    document.querySelectorAll(".event-list__menu").forEach(function (box) {
      if (box.id !== target) {
        box.style.display = 'none';
      }
    });
    event.preventDefault();
  });
});