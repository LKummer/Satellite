import { PopupAnimator } from './popup-animator';
import { Search } from './search';
import { SearchInput } from './search-input';
import { createPopper } from '@popperjs/core';

function renderItem({ title, permalink }) {
  const anchor = document.createElement('a');
  anchor.href = permalink;
  anchor.innerText = title;
  anchor.classList.add('search-results-links-item');
  const li = document.createElement('li');
  li.appendChild(anchor);
  return li;
}

function renderSection(name, items) {
  const title = document.createElement('h2');
  title.innerText = name;
  title.classList.add('search-results-section');
  const list = document.createElement('ul');
  for (const item of items) {
    list.appendChild(renderItem(item));
  }
  list.classList.add('search-results-links');
  return [title, list];
}

function renderResults(results) {
  const sections = new Map();
  for (const { item } of results) {
    const currentSection = sections.get(item.section);
    if (currentSection instanceof Array) {
      currentSection.push(item);
    } else {
      sections.set(item.section, [item]);
    }
  }
  const children = [];
  // Should sort sections somehow other than alphabetically.
  for (const [name, links] of sections) {
    const [title, items] = renderSection(name, links);
    children.push(title);
    children.push(items);
  }
  return children;
}

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
    const popupAnimator = new PopupAnimator(popup, popper, {
      showClass: 'search-results-active',
      showAnimationClass: 'search-results-show',
      hideAnimationClass: 'search-results-hide'
    });

    const searchEngine = new Search();

    const introductionSearch = new SearchInput(popupAnimator, {
      searchEngine,
      renderResults,
      noResultsElements: [noResultsElement]
    });

    input.addEventListener('keyup', (event) => {
      introductionSearch.search(event.target.value);
    });
    input.addEventListener('focusin', (event) => {
      introductionSearch.search(event.target.value);
    });
  }
}
