import Swiper from '../node_modules/swiper/swiper-bundle.esm.browser.min.js'

new Swiper('.swiper-container', {
  direction: 'vertical',
  mousewheel: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})
