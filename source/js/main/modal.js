"use strict";
(function () {
  const trigger = document.querySelector('.js-modal-trigger');
  const modal = document.querySelector('.js-modal');
  const modalClose = document.querySelectorAll('.js-modal-close');

  trigger.addEventListener('click', () => {
    modal.style.display = 'flex';
    setTimeout(()=>{
      modal.classList.add('is-show');
    },100)

  })

  modalClose.forEach((closeElement)=>{
    closeElement.addEventListener('click', () => {
      modal.classList.remove('is-show');
      setTimeout(()=>{
        modal.style.display = 'none';
      },300)

    })
  })
})();
