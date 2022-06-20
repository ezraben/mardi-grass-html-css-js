let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// cards-----------

let walkOn = document.getElementById("walk-on");
walkOn.addEventListener("click", () => {
  let walk_On_Big_Window = document.getElementById("walk-on-big-window");
  walk_On_Big_Window.style.display = "flex";
  let walk_on_close = document.getElementById("walk_on_close");
  walk_on_close.addEventListener("click", () => {
    walk_On_Big_Window.style.display = "none";
  });
});

let Sheraton = document.getElementById("Sheraton");
Sheraton.addEventListener("click", () => {
  let Sheraton_big_window = document.getElementById("Sheraton_big_window");
  Sheraton_big_window.style.display = "flex";
  let Sheraton_close = document.getElementById("Sheraton_close");
  Sheraton_close.addEventListener("click", () => {
    Sheraton_big_window.style.display = "none";
  });
});

let Ace_hotel = document.getElementById("Ace_hotel");
Ace_hotel.addEventListener("click", () => {
  let Ace_hotel_big_window = document.getElementById("Ace_hotel_big_window");
  Ace_hotel_big_window.style.display = "flex";
  let Ace_close = document.getElementById("Ace_close");
  Ace_close.addEventListener("click", () => {
    Ace_hotel_big_window.style.display = "none";
  });
});

let the_ritz = document.getElementById("the_ritz");
the_ritz.addEventListener("click", () => {
  let the_ritz_big_window = document.getElementById("the_ritz_big_window");
  the_ritz_big_window.style.display = "flex";
  let ritz_close = document.getElementById("ritz_close");
  ritz_close.addEventListener("click", () => {
    the_ritz_big_window.style.display = "none";
  });
});

let parking = document.getElementById("parking");
parking.addEventListener("click", () => {
  let parking_big_window = document.getElementById("parking_big_window");
  parking_big_window.style.display = "flex";
  let parking_close = document.getElementById("parking_close");
  parking_close.addEventListener("click", () => {
    parking_big_window.style.display = "none";
  });
});

let Louisiana_CHildren_museam = document.getElementById(
  "Louisiana_CHildren_museam"
);
Louisiana_CHildren_museam.addEventListener("click", () => {
  let Louisiana_CHildren_museam_big_window = document.getElementById(
    "Louisiana_CHildren_museam_big_window"
  );
  Louisiana_CHildren_museam_big_window.style.display = "flex";
  let Louisiana_close = document.getElementById("Louisiana_close");
  Louisiana_close.addEventListener("click", () => {
    Louisiana_CHildren_museam_big_window.style.display = "none";
  });
});

let Museum_of_death = document.getElementById("Museum_of_death");
Museum_of_death.addEventListener("click", () => {
  let Museum_of_death_big_window = document.getElementById(
    "Museum_of_death_big_window"
  );
  Museum_of_death_big_window.style.display = "flex";
  let Museum_of_death_close = document.getElementById("Museum_of_death_close");
  Museum_of_death_close.addEventListener("click", () => {
    Museum_of_death_big_window.style.display = "none";
  });
});

let Hunted_museum = document.getElementById("Hunted_museum");
Hunted_museum.addEventListener("click", () => {
  let Hunted_museum_big_window = document.getElementById(
    "Hunted_museum_big_window"
  );
  Hunted_museum_big_window.style.display = "flex";
  let Hunted_museum_close = document.getElementById("Hunted_museum_close");
  Hunted_museum_close.addEventListener("click", () => {
    Hunted_museum_big_window.style.display = "none";
  });
});
