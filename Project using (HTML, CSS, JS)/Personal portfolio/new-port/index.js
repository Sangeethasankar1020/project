document.addEventListener("DOMContentLoaded", function () {
  var upArrow = document.querySelector(".up-arrow");

  upArrow.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      upArrow.classList.add("show");
    } else {
      upArrow.classList.remove("show");
    }
  });
});

