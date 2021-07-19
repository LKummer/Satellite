export class SearchInput {
  constructor(
    input,
    popupAnimator,
    { searchEngine, renderResults, noResultsElements, resultCount = 6 }
  ) {
    this.input = input;
    this.popupAnimator = popupAnimator;
    this.searchEngine = searchEngine;
    this.renderResults = renderResults;
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
      const children = this.renderResults(results.slice(0, this.resultCount));
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
