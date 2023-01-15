/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/swiper.js ***!
  \**************************/
var swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  // autoplay: {
  //     delay: 5000,
  // },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  }
});
var productsSwiper = new Swiper('.product-swiper', {
  slidesPerView: 6,
  spaceBetween: 10,
  centeredSlides: false
});

// blog swiper
var blogSwiper = new Swiper(".blogSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-blog",
    clickable: true
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50
    }
  }
});
/******/ })()
;