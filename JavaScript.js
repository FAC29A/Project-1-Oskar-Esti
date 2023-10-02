

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

  ScrollReveal().reveal(".card-container",
    { origin: "bottom" }
  );
  ScrollReveal().reveal(" .btn, .left", {
    origin: "left",
  });
  ScrollReveal().reveal(".right, .introduction-container", {
    origin: "right",
  });

  // -------------------navbar----------------------------------------


  let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// --------scroll section active link-------------------
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((Links) => {
        Links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // ---------------Sticky navbar-----------------------
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // --------remove toggle when click navbar link (smartphone use navbar)-------------------
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};