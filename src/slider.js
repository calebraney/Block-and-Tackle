'use strict';

const sliderComponents = document.querySelectorAll('.swiper');

//if the elements aren't found exit the function
if (!sliderComponents) return;

// Loop for each slider component
sliderComponents.forEach((item) => {
  // swiper wrapper
  const wrapper = item.querySelector('.swiper-wrapper');
  const slides = wrapper.childElementCount;
  let loopMode = false;
  if (item.getAttribute('loop-mode') === 'true') {
    loopMode = true;
  }
  const swiper = new Swiper(item, {
    direction: 'horizontal',
    speed: 400,
    loop: loopMode,
    autoHeight: false,
    centeredSlides: loopMode,
    followFinger: true,
    freeMode: true,
    slideToClickedSlide: false,
    slidesPerView: 'auto',
    spaceBetween: 8,
    rewind: false,
    mousewheel: {
      forceToAxis: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    scrollbar: {
      draggable: true,
      snapOnRelease: false,
    },
    // breakpoints: {
    //   // mobile landscape
    //   480: {
    //     slidesPerView: 1,
    //     spaceBetween: '4%',
    //   },
    //   // tablet
    //   768: {
    //     slidesPerView: 2,
    //     spaceBetween: '4%',
    //   },
    //   // desktop
    //   992: {
    //     slidesPerView: 3,
    //     spaceBetween: '2%',
    //   },
    // },
    slideActiveClass: 'is-active',
    slideDuplicateActiveClass: 'is-active',
  });
  // If mode is set to loop tell swiper how many slides to copy
  if (loopMode) {
    swiper.loopedSlides = slides;
  }
});
