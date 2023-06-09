const carousel = document.querySelector('.places-gallery__carousel');
const carouselSlide = carousel.querySelector('.places-gallery__carousel-slides');
const prevButton = carousel.querySelector('.carousel__button--prev');
const nextButton = carousel.querySelector('.carousel__button--next');
const slides = carouselSlide.querySelectorAll('.carousel__slide');

let currentIndex = 0;

function updateCarousel() {
    const slideWidth = slides[0].clientWidth;
    if (currentIndex !== slides.length - 1) {
        currentIndex === 0;
    }
    carouselSlide.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
};

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
};

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    nextSlide();
});

nextSlide();
setInterval(nextSlide, 7000);