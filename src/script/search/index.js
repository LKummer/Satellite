import { PopupAnimator } from './popup-animator';
import { Search } from './search';
import { SearchInput } from './search-input';
import { createPopper } from '@popperjs/core';

export default function init() {
  const input = document.getElementById('introduction-search');
  if (input) {
    const noResultsElement = document.createElement('h2');
    noResultsElement.classList.add('search-results-empty');
    noResultsElement.innerText = 'Sorry, could not find anything.';

    const popup = document.getElementById('introduction-search-popup');
    const popper = createPopper(input, popup, {
      placement: 'bottom',
      modifiers: [{ name: 'offset', options: { offset: [0, 16] } }]
    });
    const popupAnimator = new PopupAnimator(
      popup,
      popper,
      'search-results-active',
      'search-results-show',
      'search-results-hide'
    );

    const searchEngine = new Search();

    const introductionSearch = new SearchInput(
      input,
      popupAnimator,
      searchEngine,
      [noResultsElement]
    );

    input.addEventListener('keyup', (event) => {
      introductionSearch.search(event.target.value);
    });
  }
}
