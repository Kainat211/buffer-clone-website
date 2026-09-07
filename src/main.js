const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");

menuBtn.addEventListener("click", function () {

    mobileMenu.classList.toggle("hidden");

    const isOpen = !mobileMenu.classList.contains("hidden");

    if (isOpen) {
        menuIcon.className = "fa-solid fa-xmark";
    } else {
        menuIcon.className = "fa-solid fa-bars";
    }

    menuBtn.setAttribute("aria-expanded", isOpen);
});


// Mobile menu link click hone par menu close
document.querySelectorAll("#mobileMenu a").forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.classList.add("hidden");

        menuIcon.className = "fa-solid fa-bars";

        menuBtn.setAttribute("aria-expanded", "false");

    });

});
