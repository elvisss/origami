$(function(){
	$('.navbar-custom').addClass('navbar-dark');
	$('.navbar-custom li:nth-child(5)').addClass('nav-active');



});

	var galleryTop = new Swiper('#gallery-comunity', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        // loop: true
        // spaceBetween: '3%',
        // slidesPerView: 'auto',
        // centeredSlides: true,
        // slideToClickedSlide: true
    });
    var galleryThumbs = new Swiper('#gallery-comunity-thumbs', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
        // loop: true
        // spaceBetween: '3.5%',
        // centeredSlides: false,
        // slidesPerView: 'auto',
        // slideToClickedSlide: true,
        // slidesOffsetBefore: '7.5%'
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;