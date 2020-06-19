$(document).ready(function(){
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        autoplay: true,
        responsive: [{
            breakpoint: 576,
            settings: {
                arrows: true,
                infinite: true,
                prevArrow: $('.prev'),
                nextArrow: $('.next'),
            }
        }]
      });
      $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: true
      });
              
});