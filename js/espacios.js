$(function(){
	$('.navbar-custom').addClass('navbar-dark');
	$('.navbar-custom li:nth-child(3)').addClass('nav-active');
});

var spacesSwiper = new Swiper('#space-slider-1', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
});

var spacesSwiper2 = new Swiper('#space-slider-2', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
});

var spacesSwiper3 = new Swiper('#space-slider-3', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
});

var spacesSwiper4 = new Swiper('#space-slider-4', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
});

var spacesSwiper5 = new Swiper('#space-slider-5', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
});

var spacesSwiper6 = new Swiper('#space-slider-6', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
});

var spacesSwiper7 = new Swiper('#space-slider-7', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
});

$('body').on('shown.bs.modal', '.spaces-modal', function() {
	spacesSwiper.update();
	spacesSwiper2.update();
	spacesSwiper3.update();
	spacesSwiper4.update();
	spacesSwiper5.update();
	spacesSwiper6.update();
	spacesSwiper7.update();
});