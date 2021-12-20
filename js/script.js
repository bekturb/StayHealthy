$('.testimonials__slide') .slick({
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                infinite: true,

            }
        },
        {
            breakpoint:768,
            settings:{
                slidesToShow: 2,
                slidesToScroll:1,
                arrows: false,
            }
        },
        {
            breakpoint:576,
            settings:{
                slidesToShow: 1,
                arrows: false,
                infinite: true,
            }
        },
        {
            breakpoint:414,
            settings:{
                centerMode: true,
                centerPadding: '100px',
                slidesToShow: 3,
                ariaHidden: false,

            }
        },
        ]
});