import { PopupAnimator } from './popup-animator';
import { Search } from './search';
import { SearchInput } from './search-input';
import { createPopper } from '@popperjs/core';
import { renderResults } from './results';

export default function init(baseURL) {
  const noResultsElement = document.createElement('h2');
  noResultsElement.classList.add('search-results-empty');
  noResultsElement.innerText = 'Could not find anything.';

  const searchEngine = new Search(baseURL);

  const navbarInput = document.getElementById('navbar-search');
  const navbarPopup = document.getElementById('navbar-search-popup');
  const navbarPopper = createPopper(navbarInput, navbarPopup, {
    placement: 'bottom-end',
    modifiers: [{ name: 'offset', options: { offset: [0, 32] } }]
  });
  const navbarPopupAnimator = new PopupAnimator(navbarPopup, navbarPopper, {
    showClass: 'search-results-active',
    showAnimationClass: 'search-results-show',
    hideAnimationClass: 'search-results-hide'
  });
  const navbarSearch = new SearchInput(navbarPopupAnimator, {
    searchEngine,
    renderResults,
    noResultsElements: [noResultsElement]
  });

  navbarInput.addEventListener('keyup', (event) => {
    navbarSearch.search(event.target.value);
  });
  navbarInput.addEventListener('focusin', (event) => {
    navbarSearch.search(event.target.value);
  });

  const introductionInput = document.getElementById('introduction-search');
  if (introductionInput) {
    const introductionPopup = document.getElementById(
      'introduction-search-popup'
    );
    const introductionPopper = createPopper(
      introductionInput,
      introductionPopup,
      {
        placement: 'bottom',
        modifiers: [{ name: 'offset', options: { offset: [0, 16] } }]
      }
    );
    const popupAnimator = new PopupAnimator(
      introductionPopup,
      introductionPopper,
      {
        showClass: 'search-results-active',
        showAnimationClass: 'search-results-show',
        hideAnimationClass: 'search-results-hide'
      }
    );

    const introductionSearch = new SearchInput(popupAnimator, {
      searchEngine,
      renderResults,
      noResultsElements: [noResultsElement]
    });

    introductionInput.addEventListener('keyup', (event) => {
      introductionSearch.search(event.target.value);
    });
    introductionInput.addEventListener('focusin', (event) => {
      introductionSearch.search(event.target.value);
    });
  }
}
