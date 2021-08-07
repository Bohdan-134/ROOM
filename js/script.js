/* animation-logo */
const logo = document.querySelector(".logo");
const letter = document.querySelectorAll(".logo-img-letter");

logo.onmouseenter = function() {
    letter[0].classList.remove("letter1-a1");
    letter[0].classList.add("letter1-a");
    letter[1].classList.remove("letter2-a1");
    letter[1].classList.add("letter2-a");
    letter[2].classList.remove("letter3-a1");
    letter[2].classList.add("letter3-a");
    letter[3].classList.remove("letter4-a1");
    letter[3].classList.add("letter4-a");
}

logo.onmouseleave = function() {
    letter[0].classList.remove("letter1-a");
    letter[0].classList.add("letter1-a1");
    letter[1].classList.remove("letter2-a");
    letter[1].classList.add("letter2-a1");
    letter[2].classList.remove("letter3-a");
    letter[2].classList.add("letter3-a1");
    letter[3].classList.remove("letter4-a");
    letter[3].classList.add("letter4-a1");
}

/* animation-map */

const map = document.querySelector(".map");
const mapImg = document.querySelector(".map-img");

map.onmouseenter = function() {
    mapImg.classList.add("map-img-animation");
}

map.onmouseleave = function() {
    mapImg.classList.remove("map-img-animation");
}

/* slick-slider */

$(".slider").slick({
    dots: true,
});

$(".sliderTwo").slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
});


/* AOS */

AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,


    offset: 160,
    delay: 0,
    duration: 800,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
});