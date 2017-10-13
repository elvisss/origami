$(function(){
	$('.navbar-custom').addClass('navbar-dark');
	$('.navbar-custom li:nth-child(5)').addClass('nav-active');
});

$('#gallery-comunity').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // arrows: false,
  // fade: true,
  asNavFor: '#gallery-comunity-thumbs'
});

$('#gallery-comunity-thumbs').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '#gallery-comunity',
  dots: false,
  // arrows: false,
  // centerMode: true,
  focusOnSelect: true,
  // autoplay: true,
  autoplaySpeed: 3000,
});

	// var galleryTop = new Swiper('#gallery-comunity', {
 //        nextButton: '.swiper-button-next',
 //        prevButton: '.swiper-button-prev',
 //        // loop: true
 //        // spaceBetween: '3%',
 //        // slidesPerView: 'auto',
 //        // centeredSlides: true,
 //        // slideToClickedSlide: true
 //    });
 //    var galleryThumbs = new Swiper('#gallery-comunity-thumbs', {
 //        nextButton: '.swiper-button-next',
 //        prevButton: '.swiper-button-prev',
 //        centeredSlides: true,
 //        slidesPerView: 'auto',
 //        touchRatio: 0.2,
 //        slideToClickedSlide: true,
 //        // loop: true
 //        // spaceBetween: '3.5%',
 //        // centeredSlides: false,
 //        // slidesPerView: 'auto',
 //        // slideToClickedSlide: true,
 //        // slidesOffsetBefore: '7.5%'
 //    });
 //    galleryTop.params.control = galleryThumbs;
 //    galleryThumbs.params.control = galleryTop;