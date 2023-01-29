const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenuList = document.querySelector(".mobile-menu ul");
const body = document.querySelector("body");

mobileMenuBtn.addEventListener("click", function () {
  mobileMenuList.classList.toggle("hide");
  mobileMenuList.classList.toggle("show");
  if (mobileMenuList.classList.contains("show")) {
    body.classList.add("remove-scroll");
  }
  if (mobileMenuList.classList.contains("hide")) {
    body.classList.remove("remove-scroll");
  }
});

const hideMenuOnSelect = document.querySelectorAll(".mobile-menu-ul li a");

hideMenuOnSelect.forEach((links) => {
  links.addEventListener("click", () => {
    mobileMenuList.classList.toggle("hide");
    mobileMenuList.classList.toggle("show");
    body.classList.remove("remove-scroll");
  });
});
