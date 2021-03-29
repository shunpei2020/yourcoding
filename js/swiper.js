let swiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  slidesPerView: 1.5,
  centeredSlides: true, 
  breakpoints: {
    1000: {
      slidesPerView: 3.5,
    }
  }
});