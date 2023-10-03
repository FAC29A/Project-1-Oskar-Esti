// ---------------Scroll reveal----------------------

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".h2, h3, .card-container, h2", {
  origin: "top",
});

ScrollReveal().reveal(".card-container", { origin: "bottom" });
ScrollReveal().reveal(" .btn, .left", {
  origin: "left",
});
ScrollReveal().reveal(".right, .introduction-container", {
  origin: "right",
});

// -------------Carousel----------------------------

let slideIndex = 1;

function plusSlides(n) {
  showSlides((slideIndex += n));
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

document.addEventListener("DOMContentLoaded", function () {
  showSlides(slideIndex);
});
