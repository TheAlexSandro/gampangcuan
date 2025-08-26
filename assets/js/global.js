document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");
    const dropdownParents = document.querySelectorAll(".has-dropdown");

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    dropdownParents.forEach(parent => {
        parent.addEventListener("click", (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                parent.classList.toggle("active");
            }
        });
    });

    const getCop = document.getElementById('year')
    const date = new Date().getFullYear()

    getCop.innerHTML = (date == 2025) ? date : `2024-${date}`
});