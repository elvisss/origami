var swiper = new Swiper('#main-slider', {
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
});

var galleryTop = new Swiper('#slider-room', {
   nextButton: '.swiper-button-next',
   prevButton: '.swiper-button-prev',
   // spaceBetween: 10,
});

var galleryThumbs = new Swiper('#slider-room-thumbs', {
   spaceBetween: 12,
   centeredSlides: true,
   slidesPerView: 'auto',
   // touchRatio: 0.2,
   slideToClickedSlide: true
});

galleryTop.params.control = galleryThumbs;
galleryThumbs.params.control = galleryTop;

var swiper = new Swiper('#comunity-slider', {
	nextButton: '#comunity-section .swiper-button-next',
	prevButton: '#comunity-section .swiper-button-prev',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
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
