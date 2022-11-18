$('.slider').slick({
  // autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  arrows: false,
  appendDots: $('.dots'),
  customPaging: function (slider, i) {
    var thumb = $(slider.$slides[i]).data();
    return '<a>' + (i + 1) + '</a>';
  },
  responsive: [
    {
      breakpoint: 650,
      settings: {
        arrows: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
      },
    },
  ],
});

$('.prom-slider').slick({
  customPaging: function (slider, i) {
    var thumb = $(slider.$slides[i]).data();
    return '<a></a>';
  },
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  initialSlide: 0,
  infinite: true,
  dots: true,
  arrows: false,
  appendDots: $('.prom-dots'),
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 340,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$('.about-slide').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  customPaging: function (slider, i) {
    var thumb = $(slider.$slides[i]).data();
    return '<button></button>';
  },
  slidesToShow: 1,
  initialSlide: 0,
  infinite: true,
  dots: true,
  arrows: false,
  appendDots: $('.about-dot'),
});

$('.articles__slider').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  customPaging: function (slider, i) {
    var thumb = $(slider.$slides[i]).data();
    return '<a></a>';
  },
  slidesToShow: 2,
  initialSlide: 0,
  infinite: true,
  dots: true,
  arrows: false,
  appendDots: $('.articles-dot'),

  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
