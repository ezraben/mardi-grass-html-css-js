let burger = document.getElementById("burger");
burger.addEventListener("click", () => {
  let smallNav = document.getElementById("smallNav");
  smallNav.style.transform = "translateX(0)";
  let slideshowContainer = document.getElementById("slideshow-container");

  let smallNavCOntainer = document.getElementById("smallNavCOntainer");
  smallNavCOntainer.style.display = "flex";
});
