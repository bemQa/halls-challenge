$(document).ready(function () {
    // $(window).on('load', function() {
    //     $('.preloader').delay(500).fadeToggle(500);
    // });

    $('.winners-challenge-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.challenge-slider').slick({
        lazyLoad: 'ondemand',
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1367,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});