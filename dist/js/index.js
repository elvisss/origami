var mainSwiper=new Swiper("#main-slider",{paginationClickable:!0,nextButton:".swiper-button-next",prevButton:".swiper-button-prev",autoplay:3e3,autoplayDisableOnInteraction:!1}),galleryTop=new Swiper("#slider-room",{nextButton:".swiper-button-next",prevButton:".swiper-button-prev"}),galleryThumbs=new Swiper("#slider-room-thumbs",{spaceBetween:12,centeredSlides:!0,slidesPerView:"auto",slideToClickedSlide:!0});galleryTop.params.control=galleryThumbs,galleryThumbs.params.control=galleryTop;var comunitySwiper=new Swiper("#comunity-slider",{nextButton:"#comunity-section .swiper-button-next",prevButton:"#comunity-section .swiper-button-prev",effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",loop:!0,coverflow:{rotate:0,stretch:0,depth:300,modifier:1,slideShadows:!0}});