// // Mobile navigation toggle
// document.addEventListener("DOMContentLoaded", () => {
//   const navToggle = document.createElement("button");
//   navToggle.classList.add("nav-toggle");
//   navToggle.textContent = "☰";
//   document.querySelector(".navbar .container").appendChild(navToggle);

//   const navMenu = document.querySelector(".nav ul");

//   navToggle.addEventListener("click", () => {
//     navMenu.classList.toggle("active");
//   });
// });

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let current = "";

  let scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // Add a buffer: when 50% of section is visible
    if (scrollY >= sectionTop - sectionHeight / 2) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});




