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
