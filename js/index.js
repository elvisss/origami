var mainSwiper = new Swiper('#main-slider', {
  paginationClickable: true,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  // autoplay: 3000,
  autoplayDisableOnInteraction: false,
  loop: true
});

$('#slider-room').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // arrows: false,
  // fade: true,
  asNavFor: '#slider-room-thumbs'
});

$('#slider-room-thumbs').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '#slider-room',
  dots: false,
  arrows: false,
  // centerMode: true,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 3000,
});

// var galleryTop = new Swiper('#slider-room', {
//    nextButton: '.swiper-button-next',
//    prevButton: '.swiper-button-prev',
//    // loop: true,
//    // spaceBetween: 10,
// });

// var galleryThumbs = new Swiper('#slider-room-thumbs', {
//    // spaceBetween: 12,
//    centeredSlides: true,
//    slidesPerView: 'auto',
//    // loop: true,
//    autoplay: 3000,
//    autoplayDisableOnInteraction: false,
//    // touchRatio: 0.2,
//    slideToClickedSlide: true
// });

// galleryTop.params.control = galleryThumbs;
// galleryThumbs.params.control = galleryTop;

var comunitySwiper = new Swiper('#comunity-slider', {
	nextButton: '#comunity-section .swiper-button-next',
	prevButton: '#comunity-section .swiper-button-prev',
  // autoplay: 3000,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  autoplayDisableOnInteraction: false,
  slidesPerView: 'auto',
  loop: true,
  coverflow: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows : true
  },
  breakpoints: {
      640: {
        coverflow: {
            rotate: 0,
            stretch: 0,
            depth: 500,
            modifier: 1,
            slideShadows : true
        }
      }
    }
});

$("#event-container").mCustomScrollbar({
  theme:"rounded-dots",
  scrollInertia:400
});

var offset = 300,
offset_opacity = 1200,
scroll_top_duration = 700,
$back_to_top = $('.cd-top');

$(window).scroll(function(){
  ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
  if( $(this).scrollTop() > offset_opacity ) { 
    $back_to_top.addClass('cd-fade-out');
  }
});

$back_to_top.on('click', function(event){
  event.preventDefault();
  $('body,html').animate({
    scrollTop: 0 ,
    }, scroll_top_duration
  );
});