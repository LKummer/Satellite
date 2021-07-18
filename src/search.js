import Fuse from 'fuse.js/dist/fuse.basic.esm';
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

class Search {
  constructor() {
    this.fuse = null;
  }
  async search(query) {
    if (this.fuse === null) {
      const index = await fetch('/index.json');
      this.fuse = new Fuse(await index.json(), {
        keys: ['title', 'description', 'section', 'keywords']
      });
    }
    return this.fuse.search(query);
  }
}

class SearchInput {
  constructor(
    input,
    popup,
    popper,
    searchEngine,
    popupActiveClass,
    noResultsElements,
    resultCount = 6
  ) {
    this.input = input;
    this.popup = popup;
    this.popper = popper;
    this.searchEngine = searchEngine;
    this.activeClass = popupActiveClass;
    this.noResultsElement = noResultsElements;
    this.resultCount = resultCount;
  }
  show() {
    this.popup.classList.add(this.activeClass);
    this.popup.setAttribute('aria-hidden', false);
    this.popper.update();
  }
  hide() {
    this.popup.classList.remove(this.activeClass);
    this.popup.setAttribute('aria-hidden', true);
  }
  clear() {
    this.popup.replaceChildren();
  }
  async search(query) {
    if (query) {
      this.clear();
      const results = await this.searchEngine.search(query);
      const children = renderResults(results.slice(0, this.resultCount));
      if (children.length !== 0) {
        this.popup.replaceChildren(...children);
      } else {
        console.log('no results');
        this.popup.replaceChildren(...this.noResultsElement);
      }
      this.show();
    } else {
      this.hide();
    }
  }
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

    const searchEngine = new Search();

    const introductionSearch = new SearchInput(
      input,
      popup,
      popper,
      searchEngine,
      'introduction-search-popup-active',
      [noResultsElement]
    );

    input.addEventListener('keyup', (event) => {
      introductionSearch.search(event.target.value);
    });
  }
}
