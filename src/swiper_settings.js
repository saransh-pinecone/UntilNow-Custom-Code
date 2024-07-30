var swipercapibilities = new Swiper(".capibilities_slider", {
  slidesPerView: 4,
  slidesPerGroup: 3,
  spaceBetween: 7,
  autoHeight: false,
  navigation: {
    enabled: true,
    prevEl: ".capa_left",
    nextEl: ".capa_right",
  },
  pagination: {
    enabled: true,
    hideOnClick: true,
    clickable: true,
    el: ".capa-pagination",
  },
  // autoplay: { enabled: true, disableOnInteraction: false },
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      slidesPerGroup: 1,
      spaceBetween: 24,
      // navigation: { enabled: false },
      pagination: {
        enabled: true,
        hideOnClick: false,
        clickable: false,
      },
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 16,
      // navigation: { enabled: false },
      pagination: {
        enabled: true,
        hideOnClick: false,
        clickable: false,
      },
    },
    992: { slidesPerView: 5, spaceBetween: 24 },
    1280: { slidesPerView: 5, spaceBetween: 64 },
    1920: { slidesPerView: 5, spaceBetween: 64 },
  },
});

// // };

// // Parnter slider

var swiperpartner = new Swiper(".partner_slider", {
  slidesPerView: 4,
  slidesPerGroup: 3,
  spaceBetween: 7,
  autoHeight: false,
  navigation: {
    enabled: true,
    prevEl: ".partner_left",
    nextEl: ".partner_right",
  },
  pagination: {
    enabled: true,
    hideOnClick: true,
    clickable: true,
    el: ".partner-pagination",
  },
  // autoplay: { enabled: true, disableOnInteraction: false },
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      slidesPerGroup: 1,
      spaceBetween: 24,
      // navigation: { enabled: false },
      pagination: {
        enabled: true,
        hideOnClick: false,
        clickable: false,
      },
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 16,
      // navigation: { enabled: false },
      pagination: {
        enabled: true,
        hideOnClick: false,
        clickable: false,
      },
    },
    992: { slidesPerView: 4, spaceBetween: 24 },
    1280: { slidesPerView: 4, spaceBetween: 24 },
    1920: { slidesPerView: 4, spaceBetween: 64 },
  },
});
