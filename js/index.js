var mainSwiper = new Swiper('#main-slider', {
  paginationClickable: true,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  autoplay: 3000,
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
  autoplay: 3000,
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
  }
});

$("#event-container").mCustomScrollbar({
  theme:"rounded-dots",
  scrollInertia:400
});