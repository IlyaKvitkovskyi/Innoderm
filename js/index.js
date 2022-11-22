$(function () {
  $('.menu-btn').on('click', function (event) {
    $('.menu-btn, .header__menu-content').toggleClass('active');
    $('header').toggleClass('white');
    $('.page').toggleClass('blur');
  });
});

$(function () {
  $('.burger').on('click', function (event) {
    $('.burger, .burger-wrap, .burger-menu').toggleClass('active');
    $('header').toggleClass('white');
    $('html').toggleClass('lock');
  });
});

$(function () {
  var header = $('#header'),
    introH = $('#intro').innerHeight(),
    scrollOffset = $(window).scrollTop();

  let burger = $('#burger');

  /* Fixed header */
  checkScroll(scrollOffset);

  $(window).on('scroll', function () {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      header.addClass('fixed');
      burger.addClass('black');
    } else {
      header.removeClass('fixed');
      burger.removeClass('black');
    }
  }
});
