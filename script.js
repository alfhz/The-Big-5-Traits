document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".traits-list");
    const buttons = document.querySelectorAll(".traits-menu .button");
    const prevArrow = document.querySelector(".arrow.prev");
    const nextArrow = document.querySelector(".arrow.next");
    const traitButtons = document.querySelectorAll(".traits-button");

    let currentSlide = 0;
    const totalSlides = document.querySelectorAll(".traits-item").length;
    let visibleSlides = 3;

    function updateVisibleSLides() {
        if (window.matchMedia("(max-width:600px)").matches) {
            visibleSlides = 1;
        } else if (window.matchMedia("(max-width:800px)").matches) {
            visibleSlides = 2;
        } else {
            visibleSlides = 3;
        }
    }

    function updateSlider() {
        slider.style.transform = `translateX(-${(100 / visibleSlides) * currentSlide}%)`;
    }

    window.addEventListener('resize', () => {
        updateVisibleSLides();
        updateSlider();
    })

    updateVisibleSLides();

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

    traitButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            renderPage(index);
        });
    });

    updateSlider();

    const menuIcon = document.getElementById('nav-menu-icon');
    const menu = document.getElementById('nav-menu');

    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});


function renderPage(pageIndex) {
    const page = pages[pageIndex];

    contentContainer.innerHTML = "";

    const h1 = document.createElement("h1");
    h1.textContent = page.title;
    contentContainer.appendChild(h1);

    const p = document.createElement("p");
    p.textContent = page.description;
    contentContainer.appendChild(p);

    page.card.forEach((card) => {
    const cardSection = document.createElement("div");
    cardSection.classList.add("content-section");

    const h3 = document.createElement("h3");
    h3.textContent = card.title;
    cardSection.appendChild(h3);

    const ul = document.createElement("ul");
    card.list.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
        });
        cardSection.appendChild(ul);
        contentContainer.appendChild(cardSection);
    });

    const img = document.createElement("img");
    img.src = page.img;
    img.alt = page.imgDescription;
    contentContainer.appendChild(img);

    const imgDesc = document.createElement("p");
    imgDesc.textContent = page.imgDescription;
    contentContainer.appendChild(imgDesc);
    }

renderPage(0);