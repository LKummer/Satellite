import Fuse from 'fuse.js/dist/fuse.basic.esm';

export class Search {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.fuse = null;
  }
  async search(query) {
    if (this.fuse === null) {
      const index = await fetch(`${this.baseURL}index.json`);
      this.fuse = new Fuse(await index.json(), {
        keys: ['title', 'description', 'section', 'keywords']
      });
    }
    return this.fuse.search(query);
  }
}
