

// ---------------Scroll reveal----------------------


ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
  });
  
  ScrollReveal().reveal(".h2, .card-container, heading-container h2 span", {
    origin: "top",
  });

  ScrollReveal().reveal("",
    { origin: "bottom" }
  );
  ScrollReveal().reveal(" .btn, .card-container, .left", {
    origin: "left",
  });
  ScrollReveal().reveal(".right, .introduction-container", {
    origin: "right",
  });