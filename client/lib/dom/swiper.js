const swiper1 = new Swiper('.swiper-1', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-1__pagination',
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: '.main_banner-button-next',
    prevEl: '.main_banner-button-prev',
  },
});


const swiper2 = new Swiper('.swiper-2', {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 18,
  loop: true,
  loopFillGroupWithBlank: true,
	slidesPerGroup: 4,
  // Navigation arrows
  navigation: {
    prevEl: '.product-button-prev1',
    nextEl: '.product-button-next2',
  },
});

const swiper3 = new Swiper('.swiper-3', {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 18,
  loop: true,
  loopFillGroupWithBlank: true,
	slidesPerGroup: 4,
  // Navigation arrows
  navigation: {
    prevEl: '.product2-button-prev3',
    nextEl: '.product2-button-next4',
  },
});

const swiper4 = new Swiper('.swiper-4', {
  // Optional parameters
  direction: 'vertical',
  spaceBetween: 8,
  loop: true,
  loopFillGroupWithBlank: true,
  slidesPerGroup: 1,
  // Navigation arrows
  navigation: {
    prevEl: '.side-nav__bottom-button',
    nextEl: '.side-nav__top-button',
  },

});