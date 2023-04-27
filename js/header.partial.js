const burgerMenu = document.querySelector('.burger-menu');
const headerMenu = document.querySelector('.header__menu');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    headerMenu.classList.toggle('active');
});
burgerMenu.addEventListener('click', toggleMenu);

