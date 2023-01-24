'use strict';

import Splide from '../node_modules/@splidejs/splide';

const splide = function () {
  const sliderComponents = document.querySelectorAll('.splide');

  //if the elements aren't found exit the function
  if (!sliderComponents) return;

  // Loop for each slider component
  sliderComponents.forEach((item) => {
    let loopMode = 'slide';
    if (item.getAttribute('loop-mode') === 'true') {
      loopMode = 'loop';
    }
    new Splide(item, {
      // Desktop on down
      autoWidth: true,
      autoHeight: true,
      drag: 'free',
      perMove: 1,
      focus: 0, // 0 = left and 'center' = center
      type: loopMode, // 'loop' or 'slide'
      gap: '0px', // space between slides
      arrows: false, // 'slider' or false
      pagination: false, // 'slider' or false
      speed: 600, // transition speed in miliseconds
      rewind: false, // go back to beginning when reach end
      waitForTransition: false,
      updateOnMove: true,
      trimSpace: true, // true removes empty space from end of list
    }).mount();
  });
};

//When the document is ready, load cursor
document.addEventListener('DOMContentLoaded', function (e) {
  splide();
});
