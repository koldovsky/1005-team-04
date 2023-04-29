const burgerMenu = document.querySelector('.burger-menu');
const headerMenu = document.querySelector('.header__menu');
const headerLogo = document.querySelector('.logo-container');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    headerMenu.classList.toggle('active');
    headerLogo.classList.toggle('active');
});

const menuItems = document.querySelectorAll('.header__menu-item');
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    headerMenu.classList.remove('active');
    headerLogo.classList.remove('active');
  });
});

const menuItemButton = document.querySelectorAll('.header__menu-item-button-top');
menuItemButton.forEach(item => {
  item.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    headerMenu.classList.remove('active');
    headerLogo.classList.remove('active');
  });
});