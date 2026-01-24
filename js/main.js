async function loadComponent(id, file) {
  const res = await fetch(file);
  document.getElementById(id).innerHTML = await res.text();
}

loadComponent("navbar", "html/navbar.html");
loadComponent("hero", "html/hero.html");
loadComponent("footer", "html/footer.html");
loadComponent("scope", "html/caregiver-scope.html");
loadComponent("carousel", "html/carousel.html");
loadComponent("contactme", "html/contact-me.html");
loadComponent("hero-carousel", "html/hero-carousel.html");


/* Navbar behaviour */
document.addEventListener("scroll", () => {
  const nav = document.getElementById("mainNavbar");
  if (!nav) return;

  if (window.scrollY > 20) {
    nav.classList.add("bg-white/80", "backdrop-blur-lg", "shadow-sm");
  } else {
    nav.classList.remove("bg-white/80", "backdrop-blur-lg", "shadow-sm");
  }
});

document.addEventListener("click", (e) => {
  if (e.target.id === "menuBtn") {
    document.getElementById("mobileMenu").classList.toggle("hidden");
  }
});
