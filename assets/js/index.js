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


