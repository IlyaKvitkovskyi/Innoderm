$(function () {
  $('.intro__btn').on('click', function (event) {
    $('.popup').toggleClass('active');
    $('html').toggleClass('lock');
  });

  $('.popup__close').on('click', function (event) {
    $('.popup').removeClass('active');
    $('.popup__thanks').removeClass('active');
    $('html').removeClass('lock');
  });

  $('.send__btn').on('click', function (event) {
    $('.popup').removeClass('active');
    $('.popup__thanks').toggleClass('active');
    $('html').removeClass('lock');
  });
});
