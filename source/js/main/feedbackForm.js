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
            sendEmail(res);
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
      SecureToken : "e5954290-31df-4abf-b5aa-8bb1d285f13a",
      To : 'info@vektoruspeha.com',
      From : "info@vektoruspeha.com",
      Subject: `${name} sent you a message`,
      Body: `
        <p><h4>Здравствуйте, меня зовут: ${name}</h4></p>
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
