'use strict';

const cursor = function () {
  const hoverItems = document.querySelectorAll('[cr-element="hover-item"]');
  const cursor = document.querySelector('#cursor-element');
  const cursorText = document.querySelector('#cursor-text');

  //if the elements aren't found exit the function
  if (!hoverItems || !cursor || !cursorText) return;

  hoverItems.forEach((item) => {
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
      if (!itemText) return;
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
