'use strict';

const cursor = function () {
  const hoverItems = document.querySelectorAll('[cr-element="hover-item"]');
  const hoverWrapper = document.querySelector('[cr-element="hover-wrapper"]');
  const cursor = document.querySelector('#cursor-element');
  const cursorText = document.querySelector('#cursor-text');

  //if the elements aren't found exit the function
  if (!hoverItems || !hoverWrapper || !cursor || !cursorText) return;

  hoverItems.forEach((item) => {
    // action on hover in
    item.addEventListener('mouseenter', function (event) {
      const itemText = item.querySelector('[cr-hover-text]').getAttribute('cr-hover-text');
      cursorText.textContent = itemText;
      cursor.classList.add('is-active');
    });
    // action on hover out
    item.addEventListener('mouseleave', function (event) {
      cursor.classList.remove('is-active');
    });
  });
};

//When the document is ready, load cursor
document.addEventListener('DOMContentLoaded', function (e) {
  cursor();
});
