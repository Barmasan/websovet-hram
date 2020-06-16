


// slider
$slick_slider = $('.mobile-items');
settings_slider = {
  dots: false,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  infinite: false,
  prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  // more settings
}
slick_on_mobile( $slick_slider, settings_slider);

// slick on mobile
function slick_on_mobile(slider, settings){
  $(window).on('load resize', function() {
    if ($(window).width() > 767) {
      if (slider.hasClass('slick-initialized')) {
        slider.slick('unslick');
      }
      return
    }
    if (!slider.hasClass('slick-initialized')) {
      return slider.slick(settings);
    }
  });
};