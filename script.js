document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".traits-list");
    const buttons = document.querySelectorAll(".traits-menu .button");
    const prevArrow = document.querySelector(".arrow.prev");
    const nextArrow = document.querySelector(".arrow.next");
    let currentSlide = 0;

    const totalSlides = document.querySelectorAll(".traits-item").length;
    const visibleSlides = 3;

    function updateSlider() {
        slider.style.transform = `translateX(-${(100 / visibleSlides) * currentSlide}%)`;
    }

    prevArrow.addEventListener("click", () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlider();
        }
    });

    nextArrow.addEventListener("click", () => {
        if (currentSlide < totalSlides - visibleSlides) {
            currentSlide++;
            updateSlider();
        }
    });

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            currentSlide = index;
            updateSlider();
        });
    });

    updateSlider();
});
