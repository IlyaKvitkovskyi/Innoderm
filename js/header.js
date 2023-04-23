$(function () {
  console.log('hi');
  var header = $('#header'),
    introH = $('#intro').innerHeight(),
    scrollOffset = $(window).scrollTop();

  console.log(introH);

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
