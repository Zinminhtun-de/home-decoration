var elements = document.querySelectorAll(
  "header > #header_wrapper > nav > ul > li > a"
);
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

const navItems = document.querySelector(".nav-items");
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navItems.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navItems.classList.add("nav-items-fixed");
  } else {
    navItems.classList.remove("nav-items-fixed");
  }
});
