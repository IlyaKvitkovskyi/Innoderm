// $(function () {
//   //for slick slider
//   $('.slider').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     dots: true,
//     centerMode: true,
//     arrows: false,
//     appendDots: $('.numbers'),
//   });

//   // On swipe event
//   // $('.slider').on('swipe', function (event, slick, direction) {
//   //   if (direction === 'left') {
//   //     $('.slick-dots').removeClass('right-transition');
//   //     $('.slick-dots').addClass('left-transition');
//   //   } else {
//   //     $('.slick-dots').removeClass('left-transition');
//   //     $('.slick-dots').addClass('right-transition');
//   //   }
//   //   var newIndex = $('.slider .slick-slide.slick-current.slick-active').attr('data-slick-index');
//   //   $('.slider .slick-dots').removeClass(function (index, css) {
//   //     return (css.match(/\bnavDotIndex-\S+/g) || []).join(' '); // removes anything that starts with "navDotIndex-"
//   //   });
//   //   $('.slider .slick-dots').addClass('navDotIndex-' + newIndex);
//   // });

//   // $('.slider .slick-dots').append("<li class='animated-dot'><li>");
//   // $('.slider .slick-dots .animated-dot').next('li').remove();

//   // $('.slick-dots li button').click(function (e) {
//   //   e.stopPropagation();
//   // });

//   // for other navigation item
//   $('li').click(function () {
//     $('li').removeClass('active');
//     $(this).toggleClass('active');
//   });
// });

// $('#slick-slider').slick({
//   autoplay: true,
//   dots: true,
//   appendArrows: $('.slick-slider-nav'),
//   appendDots: $('.slick-slider-dots'),
//   prevArrow: "<button class='slick-prev btn btn-white rounded-circle'><i class='mdi mdi-chevron-left'></i></button>",
//   nextArrow: "<button class='slick-next btn btn-white rounded-circle'><i class='mdi mdi-chevron-right'></i></button>",
// });

$('.slider').slick({
  // autoplay: true,

  dots: true,
  arrows: false,
  appendDots: $('.dots'),
  customPaging: function (slider, i) {
    var thumb = $(slider.$slides[i]).data();
    return '<a>' + (i + 1) + '</a>';
  },
  // responsive: [
  //   {
  //     breakpoint: 500,
  //     settings: {
  //       dots: false,
  //       arrows: false,
  //       infinite: false,
  //       slidesToShow: 2,
  //       slidesToScroll: 2,
  //     },
  //   },
  // ],
});
