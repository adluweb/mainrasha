window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#open').addEventListener('click', function () {
    document.querySelector('#burger').classList.toggle('active')
  });
  document.querySelector('#close').addEventListener('click', function () {
    document.querySelector('#burger').classList.toggle('active')
  });

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
})
