'use strict';

const projectList = document.querySelector('[fs-cmsfilter-element="list"]');
const filterForm = document.querySelector('[fs-cmsfilter-element="filters"]');
const filterList = document.querySelector('[cr-element="filter-list"]');
const filterItems = document.querySelectorAll('[cr-element="filter-item"]');
const resultsCount = document.querySelector('[fs-cmsfilter-element="results-count"]');

const arrangeCheckboxes = function () {
  // get the state for gsap flip
  let state = Flip.getState('.filters_item');

  //select the checked filter items
  filterItems.forEach((item) => {
    const checkbox = item.querySelector('[cr-element="checkbox"]');
    const checkboxState = checkbox.checked;
    if (!checkbox) return;
    //if checkbox is checked move item to the top of the list
    if (checkboxState) {
      filterList.prepend(item);
    }
  });

  // Animate the filter items
  Flip.from(state, {
    duration: 0.5,
    ease: 'power3.out',
  });
};

const modifyGrid = function () {
  //get the results number
  let results = Number(resultsCount.textContent);
  //clear any active grid classes
  projectList.classList.remove('is-2-col');
  projectList.classList.remove('is-1-col');
  //two column grid
  if (results <= 9 && results >= 3) {
    projectList.classList.add('is-2-col');
  }
  //one column grid
  if (results <= 3) {
    projectList.classList.add('is-1-col');
  }
};

filterForm.addEventListener('change', (event) => {
  const clickedFilterItem = event.target.closest('[cr-element="filter-item"]');
  if (!clickedFilterItem) return;
  arrangeCheckboxes();
});

// Select the node that will be observed for mutations
const targetNode = resultsCount;

// Options for the observer (which mutations to observe)
const config = {
  attributes: true,
  childList: true,
  subtree: true,
};

// Callback function to execute when mutations are observed
const mutationCallback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    // use mutation.target to get the element that has mutated.
    // e.g. mutation.target.style.opacity = 0.5
    modifyGrid();
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(mutationCallback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
