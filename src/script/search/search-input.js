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

export class SearchInput {
  constructor(
    input,
    popupAnimator,
    searchEngine,
    noResultsElements,
    resultCount = 6
  ) {
    this.input = input;
    this.popupAnimator = popupAnimator;
    this.searchEngine = searchEngine;
    this.noResultsElement = noResultsElements;
    this.resultCount = resultCount;
  }
  clear() {
    this.popupAnimator.popup.replaceChildren();
  }
  async search(query) {
    if (query) {
      this.clear();
      const results = await this.searchEngine.search(query);
      const children = renderResults(results.slice(0, this.resultCount));
      if (children.length !== 0) {
        this.popupAnimator.popup.replaceChildren(...children);
      } else {
        console.log('no results');
        this.popupAnimator.popup.replaceChildren(...this.noResultsElement);
      }
      this.popupAnimator.show();
    } else {
      this.popupAnimator.hide();
    }
  }
}
