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

  $('#datepicker').datepicker({
    language: 'es',
    setDate: '10/13/2017',
    todayHighlight: true
  });
  $('#datepicker').on('changeDate', function() {
      $('#my_hidden_input').val(
          $('#datepicker').datepicker('getFormattedDate')
      );
  });

  var swiper = new Swiper('#events-slider', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    followFinger: false,
    freeMode: true,
    breakpoints: {
      768: {
        freeMode: false,
        followFinger: true
      }
    }
  });

  $('.box-list-event').on('click', function(e) {
    $('.box-list-event').removeClass('event-active');
    $(this).addClass('event-active');
    e.preventDefault();
    var slide = $(this).index();
    swiper.slideTo(slide)
  });

});

