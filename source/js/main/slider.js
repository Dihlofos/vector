"use strict";
(function () {
  const contentsEls = document.querySelectorAll(".js-content");
  // e - индекс слайда
  const toggleContent = (e) => {
    contentsEls.forEach((item) => {
      const contentIndex = item.dataset.contentIndex;
      if (Number(contentIndex) === Number(e)) {
        item.classList.add("is-active");
      } else {
        item.classList.remove("is-active");
      }
    });
  };
  const swiperSlider = new Swiper(".js-slider", {
    // Optional parameters
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 0,
    initialSlide: 1,
    speed: 1000,
    draggable: false,
    pagination: false,
    loop: true,
    allowTouchMove: false,
    slideToClickedSlide: true,
    on: {
      slideChange: function (e) {
        toggleContent(e.realIndex);
      },
    },

    navigation: {
      nextEl: ".swiper__next",
      prevEl: ".swiper__prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        allowTouchMove: true,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },

      1025: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
})();
