'use strict';

const collectionList = document.querySelector('[fs-cmsfilter-element="list"]');
const filterForm = document.querySelector('[fs-cmsfilter-element="filters"]');
const filterList = document.querySelector('[cr-element="filter-list"]');
const filterItems = document.querySelectorAll('[cr-element="filter-item"]');
const resultsCount = document.querySelector('[fs-cmsfilter-element="results-count"]');

console.log(collectionList);

filterItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    // filterItems.filter()

    // get the state for gsap flip
    let state = Flip.getState('.filters_item');
    const checkbox = item.querySelector('[type=checkbox]');
    //re-arrange the Filter Items
    if (checkbox.classList.contains('is-active')) {
      filterList.append(item);
    } else {
      filterList.prepend(item);
    }
    // Animate the filter items
    Flip.from(state, {
      duration: 0.4,
      ease: 'power2.out',
    });
  });
});
