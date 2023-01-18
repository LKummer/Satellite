export class SearchInput {
  constructor(
    popupAnimator,
    { searchEngine, renderResults, noResultsElements, resultCount = 6 }
  ) {
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
      const children = this.renderResults(
        results.slice(0, this.resultCount),
        () => {
          this.popupAnimator.hide();
        }
      );
      if (children.length !== 0) {
        this.popupAnimator.popup.replaceChildren(...children);
      } else {
        this.popupAnimator.popup.replaceChildren(...this.noResultsElement);
      }
      this.popupAnimator.show();
    } else {
      this.popupAnimator.hide();
    }
  }
}
