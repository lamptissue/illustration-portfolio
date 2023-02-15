window.addEventListener("DOMContentLoaded", function () {
  let container = document.querySelector(".masonry");
  let msnry;
  imagesLoaded(container, function () {
    msnry = new Masonry(container, {
      itemSelector: ".item",
    });
  });
});

document.addEventListener("mousemove", function (event) {
  if (event.clientX > window.innerWidth / 2) {
    document.body.classList.add("right-side");
    document.body.classList.remove("left-side");
  } else {
    document.body.classList.add("left-side");
    document.body.classList.remove("right-side");
  }
});
