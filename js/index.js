$(function () {
  $('.menu-btn').on('click', function (event) {
    $('.menu-btn, .header__menu-content').toggleClass('active');
    $('header').toggleClass('white');
    $('.page').toggleClass('blur');
  });
});
