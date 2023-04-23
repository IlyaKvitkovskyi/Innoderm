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
