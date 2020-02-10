'use strict';

if (window.main.getWindowWidth() < 768) {
  (function () {
    return new window.Swiper('#live-israel-swiper.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      pagination: {
        el: '#live-israel-swiper .swiper-pagination',
        clickable: true
      },
    });
  })();
}

(function () {
  return new window.Swiper('#reviews-swiper.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 100,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
})();
