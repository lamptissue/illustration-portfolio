window.addEventListener("DOMContentLoaded", function () {
  let container = document.querySelector(".masonry");
  let msnry;
  imagesLoaded(container, function () {
    msnry = new Masonry(container, {
      itemSelector: ".item",
    });
  });
});
