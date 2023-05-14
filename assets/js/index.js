// Drawer Menu
$(document).ready(function() {
    $('.drawer').drawer();
});

// Audio loop play

(() => {
    let ad = new Audio("assets/images/joboo-jingle.mp3");
    ad.loop = true;

    const element = document.getElementById('loop');
    element.addEventListener('click', function() {
        if (ad.paused) {
            ad.play()
        }
        else{
            ad.pause()
        }
    });
})();

// Initialize Swiper
// var swiper = new Swiper('.swiper', {
//     slidesPerView: 3,
//     direction: getDirection(),
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     on: {
//         resize: function () {
//         swiper.changeDirection(getDirection());
//         },
//     },
// });

// function getDirection() {
//     var windowWidth = window.innerWidth;
//     var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

//     return direction;
// }
