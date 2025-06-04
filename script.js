$(document).ready(function () {
    $('#menuToggle').click(function () {
        $('#navMenu ul').toggleClass('show');
    });

    // Slider
    const images = [
        'mojastrankaTechFix/pocitac1.jpg',
        'mojastrankaTechFix/pocitac2.jpg',
        'mojastrankaTechFix/pocitac3.jpg'
    ];
    let index = 0;

    $('#sliderImage').attr('src', images[0]);


    setInterval(function () {
        index = (index + 1) % images.length;
        $('#sliderImage').fadeOut(500, function () {
            $(this).attr('src', images[index]).fadeIn(500);
        });
    }, 3000);
});
