'use strict';

const cursor = function () {
  const hoverTextItems = document.querySelectorAll('[cr-element="cursor-text"]');
  const hoverSliderItems = document.querySelectorAll('[cr-element="cursor-slider"]');
  const hoverVideoItems = document.querySelectorAll('[cr-element="cursor-video"]');
  const cursor = document.querySelector('#cursor-element');
  const cursorText = document.querySelector('#cursor-text');
  const cursorSlider = document.querySelector('#cursor-slider');
  const cursorVideo = document.querySelector('#cursor-video');

  //if the elements aren't found exit the function
  if (!cursor) return;

  // Event Listener for each hover text item
  hoverTextItems.forEach((item) => {
    // action on hover in
    item.addEventListener('mouseenter', function (event) {
      let itemText;
      // if the hover item has cr-hover-text get the text from the item
      if (item.hasAttribute('cr-hover-text')) {
        itemText = item.getAttribute('cr-hover-text');
      }
      // if not, get the text from a child with that attribute
      else {
        itemText = item.querySelector('[cr-hover-text]').getAttribute('cr-hover-text');
      }
      if (!itemText || !cursorText) return;
      cursorText.textContent = itemText;
      cursorText.style.display = 'block';
      cursor.classList.add('is-active');
    });
    // action on hover out
    item.addEventListener('mouseleave', function (event) {
      cursor.classList.remove('is-active');
      cursorText.style.display = 'none';
    });
  });

  // Event Listener for each hover slider item
  hoverSliderItems.forEach((item) => {
    if (!cursorSlider) return;
    // action on hover in
    item.addEventListener('mouseenter', function (event) {
      cursorSlider.style.display = 'block';
      cursor.classList.add('is-active');
    });
    // action on hover out
    item.addEventListener('mouseleave', function (event) {
      cursor.classList.remove('is-active');
      cursorSlider.style.display = 'none';
    });
  });

  // Event Listener for each hover video item
  hoverVideoItems.forEach((item) => {
    if (!cursorVideo) return;
    // action on hover in
    item.addEventListener('mouseenter', function (event) {
      cursorVideo.style.display = 'block';
      cursor.classList.add('is-active');
    });
    // action on hover out
    item.addEventListener('mouseleave', function (event) {
      cursor.classList.remove('is-active');
      cursorVideo.style.display = 'none';
    });
  });
};

//When the document is ready, load cursor
document.addEventListener('DOMContentLoaded', function (e) {
  cursor();
});
