$(function(){
  $('.navbar-custom').addClass('navbar-dark');
  $('.navbar-custom li:nth-child(6)').addClass('nav-active');

  var $frame = $('#boxes-list-events');
  var $wrap = $frame.parent();
  // Call Sly on frame
  $frame.sly({
    speed: 300,
    // easing: 'easeOutExpo',
    activatePageOn: 'click',
    scrollBar: $wrap.find('.scrollbar'),
    scrollBy: 100,
    dragHandle: true,
    clickBar: 1,
    dynamicHandle: true,
    minHandleSize: 28
  });

});

var swiper = new Swiper('#events-slider', {
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  followFinger: false,
  freeMode: true,
  breakpoints: {
    768: {

    }
  }
});