const burgerMenu = document.querySelector(".burger-menu-sec-pg");
const headerMenu = document.querySelector(".header__menu-sec-pg");
const headerLogo = document.querySelector(".logo-container-sec-pg");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  headerMenu.classList.toggle("active");
  headerLogo.classList.toggle("active");
});

const menuItems = document.querySelectorAll(".header__menu-item-sec-pg");
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
    headerMenu.classList.remove("active");
    headerLogo.classList.remove("active");
  });
});

const menuItemButton = document.querySelector(".header__menu-item-button-sec-pg");
menuItemButton.addEventListener("click", () => {
  burgerMenu.classList.remove("active");
  headerMenu.classList.remove("active");
  headerLogo.classList.remove("active");
});
