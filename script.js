document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".traits-list");
    const buttons = document.querySelectorAll(".traits-menu .button");
    const prevArrow = document.querySelector(".arrow.prev");
    const nextArrow = document.querySelector(".arrow.next");
    const traitButtons = document.querySelectorAll(".traits-button");
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

    traitButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            renderPage(index); // Navigate to the corresponding trait page
        });
    });

    updateSlider();
});


function renderPage(pageIndex) {
    const page = pages[pageIndex];

    // Reset old content
    contentContainer.innerHTML = "";

    // Create H1 element for the main title
    const h1 = document.createElement("h1");
    h1.textContent = page.title;
    contentContainer.appendChild(h1);

    // Create P element for the main description
    const p = document.createElement("p");
    p.textContent = page.description;
    contentContainer.appendChild(p);

    // Loop to add cards
    page.card.forEach((card) => {
    const cardSection = document.createElement("div");
    cardSection.classList.add("content-section");

    // H3 for card title
    const h3 = document.createElement("h3");
    h3.textContent = card.title;
    cardSection.appendChild(h3);

    // List for pros and cons
    const ul = document.createElement("ul");
    card.list.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
        });
        cardSection.appendChild(ul);

        // Add card to the main container
        contentContainer.appendChild(cardSection);
    });

    // Add image
    const img = document.createElement("img");
    img.src = page.img;
    img.alt = page.imgDescription;
    contentContainer.appendChild(img);

    // Add description for the image
    const imgDesc = document.createElement("p");
    imgDesc.textContent = page.imgDescription;
    contentContainer.appendChild(imgDesc);
    }

// Show the first page (index 0)
renderPage(0);