"use strict";
(function () {
  // init controller
  const controller = new ScrollMagic.Controller();
  const vw = window.innerWidth;
  const offset = vw > 767 ? 300 : 150;

  const commonOptions = {
    reverse: false,
    offset,
    triggerHook: "onEnter",
  };

  //intro button
  new ScrollMagic.Scene({
    ...commonOptions,
    triggerElement: ".intro__button",
  })
    .setClassToggle(".intro__button", "fadeIn")
    .addTo(controller);

  //order items
  document.querySelectorAll(".order__item").forEach((item) => {
    new ScrollMagic.Scene({
      ...commonOptions,
      offset: offset - 100,
      triggerElement: item,
    })
      .setClassToggle(item, "fromTop")
      .addTo(controller);
  });

  //sliders
  document.querySelectorAll(".js-content").forEach((item) => {
    new ScrollMagic.Scene({
      ...commonOptions,
      triggerElement: ".catalog__content",
    })
      .setClassToggle(item.querySelectorAll(".catalog__content-item"), "fadeIn")
      .addTo(controller);
  });

  //howto
  new ScrollMagic.Scene({
    ...commonOptions,
    triggerElement: ".howto",
  })
    .setClassToggle(".howto", "howToAnimation")
    .addTo(controller);

  //contacts
  new ScrollMagic.Scene({
    ...commonOptions,
    offset: 500,
    triggerElement: ".contacts",
  })
    .setClassToggle(".contacts__bg-wrap", `${vw > 767 ? "fromBottom" : ""}`)
    .addTo(controller);

  new ScrollMagic.Scene({
    ...commonOptions,
    triggerElement: ".contacts__container",
  })
    .setClassToggle(
      ".contacts__content",
      `${vw > 767 ? "fromLeftDeep" : "fromTop"}`
    )
    .addTo(controller);

  new ScrollMagic.Scene({
    ...commonOptions,
    triggerElement: ".contacts__container",
  })
    .setClassToggle(
      ".contacts__form",
      `${vw > 767 ? "fromDeepRight" : "fromTop"}`
    )
    .addTo(controller);
})();

"use strict";
(function () {
  let upButton = document.querySelector(".up");

  if (upButton) {
    window.onscroll = function () {
      if (window.pageYOffset > 260) {
        upButton.classList.add("up--shown");
      } else {
        upButton.classList.remove("up--shown");
      }
    };

    upButton.onclick = function () {
      window.scrollTo(0, 0);
    };
  }
})();

"use strict";
(function () {
  const form = document.querySelector(".js-form");
  const formSubmitButton = document.querySelector(".js-form-submit");
  const formDone = document.querySelector(".js-form-done");
  const formWrong = document.querySelector(".js-form-wrong");
  initEvents();

  function initEvents() {
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      grecaptcha.ready(function () {
        grecaptcha
          .execute("6LczUdEaAAAAACImrHbKWiSSutDmsNCH1sC9zXbu", {
            action: "submit",
          })
          .then(function (token) {
            let res = {};
            const formData = new FormData(form);

            for (let [key, value] of formData.entries()) {
              res[key] = value;
            }
            console.log("all correct, but not do anything further");
            // sendEmail(res);
          })
          .catch((error) => {
            formWrong.style.opaciy = 1;
          });
      });
    });
  }

  function sendEmail({ name, email, phone, message }) {
    formSubmitButton.setAttribute("disabled", true);
    Email.send({
      SecureToken: "e8ae44f3-777e-40ec-a616-3f2aad062e93",
      To: "Privet.spm@yandex.ru",
      From: "maria@eventpro.ru.com",
      Subject: `${name} sent you a message`,
      Body: `
        <p><h4>Привет, меня зовут: ${name}</h4></p>
        <p><strong>Сообщение:</strong> ${message}</p>
        <p><strong>Адрес электронной почты:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
      `,
    })
      .then((message) => {
        formDone.style.opacity = 1;
      })
      .catch((error) => {
        formWrong.style.opaciy = 1;
      });
  }
})();

"use strict";
(function () {
  let burger = document.querySelector(".js-burger");
  let nav = document.querySelector(".js-nav");
  const { disableBodyScroll, enableBodyScroll } = bodyScrollLock;

  if (burger && nav) {
    // menu toggle
    burger.addEventListener("click", () => {
      if (nav.classList.contains("js-open")) {
        disableBodyScroll(burger);
        nav.classList.remove("js-open");
        burger.classList.add("js-open");
      } else {
        enableBodyScroll(burger);
        nav.classList.add("js-open");
        burger.classList.remove("js-open");
      }
    });

    // nav click
    nav.addEventListener("click", (e) => {
      const nav = e.currentTarget;
      if (nav.classList.contains("js-open")) {
        burger.click();
      }
    });
  }
})();

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

"use strict";
(function () {
  window.scroll = new SmoothScroll(".js-scroll", {
    speed: 800,
    speedAsDuration: true,
    easing: "easeOutQuad",
  });
})();
