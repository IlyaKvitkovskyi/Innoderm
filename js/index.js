$(function () {
  $('.menu-btn').on('click', function (event) {
    $('.menu-btn, .header__menu-content').toggleClass('active');
    $('header').toggleClass('white');
    $('.page').toggleClass('blur');
  });
  //   //for slick slider
  //   $('.slider').slick({
  //     slidesToShow: 1,
  //     // slidesToScroll: 1,
  //     dots: true,
  //     // centerMode: true,

  //     fade: true,
  //     // autoplay: true,
  //     // autoplaySpeed: 2000,
  //     // appendDots: $('.numbers'),
  //   });

  // On swipe event
  // $('.slider').on('swipe', function (event, slick, direction) {
  //   if (direction === 'left') {
  //     $('.slick-dots').removeClass('right-transition');
  //     $('.slick-dots').addClass('left-transition');
  //   } else {
  //     $('.slick-dots').removeClass('left-transition');
  //     $('.slick-dots').addClass('right-transition');
  //   }
  //   var newIndex = $('.slider .slick-slide.slick-current.slick-active').attr('data-slick-index');
  //   $('.slider .slick-dots').removeClass(function (index, css) {
  //     return (css.match(/\bnavDotIndex-\S+/g) || []).join(' '); // removes anything that starts with "navDotIndex-"
  //   });
  //   $('.slider .slick-dots').addClass('navDotIndex-' + newIndex);
  // });

  // $('.slider .slick-dots').append("<li class='animated-dot'><li>");
  // $('.slider .slick-dots .animated-dot').next('li').remove();

  // $('.slick-dots li button').click(function (e) {
  //   e.stopPropagation();
  // });

  //   // for other navigation item
  //   $('li').click(function () {
  //     $('li').removeClass('active');
  //     $(this).toggleClass('active');
  //   });

  //   // for services accordion
  //   $('[data-collapse]').on('click', function (event) {
  //     event.preventDefault();

  //     var $this = $(this),
  //       blockId = $this.data('collapse');

  //     $this.toggleClass('active');
  //   });
});
