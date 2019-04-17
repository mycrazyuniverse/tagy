const carousel = document.querySelector("[data-target='carousel']");
const card = carousel.querySelector("[data-target='card']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");

const carouselWidth = carousel.offsetWidth;
const cardWidth = card.offsetWidth;
const cardStyle = card.currentStyle || window.getComputedStyle(card);
const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);

const cardCount = carousel
    .querySelectorAll("[data-target='card']")
    .length;
var cardPerSlide = Math.floor(carouselWidth / cardWidth);
var isPaused = false;

var offset = 0;

const maxX = -((cardCount / cardPerSlide) * carouselWidth + cardMarginRight * (cardCount / cardPerSlide) - carouselWidth - cardMarginRight);

setInterval(() => {
    if (!isPaused) {
        if (offset <= maxX) {
            offset = 0;
            carousel.style.transform = `translateX(${offset}px)`;
        } else {
            right();
        }
    }
}, 2000);

leftButton.addEventListener("click", function () {
    right();
    isPaused = true;
});

rightButton.addEventListener("click", function () {
    left();
    isPaused = true;
});

function left() {
    if (offset !== 0) {
        offset += carouselWidth + cardMarginRight;
        carousel.style.transform = `translateX(${offset}px)`;
    }
}

function right() {
    if (offset !== maxX) {
        offset -= carouselWidth + cardMarginRight;
        carousel.style.transform = `translateX(${offset}px)`;
    }
}