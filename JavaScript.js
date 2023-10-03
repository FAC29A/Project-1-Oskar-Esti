

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
  ScrollReveal().reveal(" .btn, .left, .about-text, .contact-list", {
    origin: "left",
  });
  ScrollReveal().reveal(".right, .introduction-container, .contact-container", {
    origin: "right",
  });