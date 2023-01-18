export class Search {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.fuse = null;
  }
  async search(query) {
    if (this.fuse === null) {
      // Dynamically import the libraries required for search.
      const { getSearchIndex } = await import('./search-index');
      this.fuse = await getSearchIndex(this.baseURL);
    }
    const result = this.fuse.search(query);
    console.log(result);
    return result;
  }
}
