
const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

// const flag = document.querySelector('.flag'),
//     menu__flag = document.querySelector('.menu__flag'),
//     closeElen = document.querySelector('.menu__flag-close');

// flag.addEventListener('click', () => {
//     menu.classList.add('active');
// });

// closeElem.addEventListener('click', () => {
//     menu.classList.remove('active');
// });

const slider = tns({
    container: '.about__carousel-inner',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    // autoplay: 3000,
    speed: 1000,
    controls: false,
    nav: true,
    responsive: {
        640: {
            edgePadding: 20,
            gutter: 20,
            items: 1
        },
        700: {
            gutter: 30
        },
        1100: {
            items: 1,

        }
    }
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});


