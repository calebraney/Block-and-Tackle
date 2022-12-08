'use strict';

const collectionList = document.querySelector('[fs-cmsfilter-element="list"]');
const filterForm = document.querySelector('[fs-cmsfilter-element="filters"]');
const filterList = document.querySelector('[cr-element="filter-list"]');
const filterItems = document.querySelectorAll('[cr-element="filter-item"]');
const resultsCount = document.querySelector('[fs-cmsfilter-element="results-count"]');

console.log(collectionList);

const arrangeCheckboxes = function () {};

filterForm.addEventListener('click', (event) => {
  const clickedFilterItem = event.target.closest('[cr-element="filter-item"]');
  if (!clickedFilterItem) return;

  //select the checked filter items
  //   const checkedFilterItems = filterItems.filter(function (item) {
  //     return item.querySelector('[type=checkbox]').checked;
  //   });
  //   console.log(checkedFilterItems);

  //animate the filter items

  // get the state for gsap flip
  let state = Flip.getState('.filters_item');
  const checkbox = clickedFilterItem.querySelector('[type=checkbox]');
  //re-arrange the Filter Items
  if (checkbox.classList.contains('is-active')) {
    filterList.append(clickedFilterItem);
  } else {
    filterList.prepend(clickedFilterItem);
  }
  // Animate the filter items
  Flip.from(state, {
    duration: 0.4,
    ease: 'power2.out',
  });
});
