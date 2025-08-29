document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  const dropdownParents = document.querySelectorAll(".has-dropdown");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  dropdownParents.forEach((parent) => {
    const link = parent.querySelector("a");
    link.addEventListener("click", (e) => {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        parent.classList.toggle("active");
      }
    });
  });

  const getCop = document.getElementById("year");
  const date = new Date().getFullYear();

  getCop.innerHTML = date == 2025 ? date : `2024-${date}`;

  const slides = document.querySelector(".slides");
  const dots = document.querySelectorAll(".dot");
  const first = document.getElementById("1");
  let index = 0;

  function showSlide(i) {
    const total = slides.children.length;
    const slideWith = slides.querySelector("img").offsetWidth;
    index = (i + total) % total;
    first.addEventListener("click", () => {
      slides.style.transform = `translateX(-${index * slideWith}px)`;

      dots.forEach((dot) => dot.classList.remove("active"));
      dots[index].classList.add("active");
    });
    slides.style.transform = `translateX(-${index * slideWith + 50}px)`;

    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => showSlide(i));
  });
});
