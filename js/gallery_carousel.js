const carousel = document.querySelector('.places-gallery__carousel');
const carouselSlide = carousel.querySelector('.places-gallery__carousel-slides');
const prevButton = carousel.querySelector('.carousel__button--prev');
const nextButton = carousel.querySelector('.carousel__button--next');
const slides = carouselSlide.querySelectorAll('.carousel__slide');

let currentIndex = 0;

function updateCarousel() {
    carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});
