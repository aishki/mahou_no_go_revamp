$(function () {
  $("#navbar-container").load("partials/navbar.html", function () {
    window.addEventListener("scroll", function () {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    });

    const currentPath = window.location.pathname.split("/").pop() || "home"; // Default to 'home' if path is empty
    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach((link) => {
      const linkPath = link.getAttribute("href").split("/").pop(); // Get the href's file name
      if (linkPath === currentPath) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
});
