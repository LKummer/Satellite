import Fuse from 'fuse.js/dist/fuse.basic.esm';
import { Parser } from 'commonmark';

function findHeadings(tree) {
  let result = [];
  if (tree._type === 'heading') {
    result.push(tree);
  }
  if (tree._firstChild) {
    result = result.concat(findHeadings(tree._firstChild));
  }
  if (tree._next) {
    result = result.concat(findHeadings(tree._next));
  }
  return result;
}

function linkifyHeading(literal) {
  return literal.toLowerCase().replaceAll(/\s/gu, '-').replaceAll(/\//gu, '');
}

export async function getSearchIndex(baseURL) {
  const markdownReader = new Parser({});
  const index = await fetch(`${baseURL}index.json`);
  const data = (await index.json()).map((page) => {
    const headings = findHeadings(markdownReader.parse(page.content))
      .map((heading) => ({
        literal: heading._firstChild._literal,
        line: heading._sourcepos[0][0],
        href: `${page.permalink}#${linkifyHeading(
          heading._firstChild._literal
        )}`
      }))
      // Sort in reverse order for easier lookup later on.
      .sort((a, b) => b.line - a.line);
    return { ...page, headings };
  });
  return new Fuse(data, {
    keys: ['title', 'description', 'section', 'keywords', 'content'],
    threshold: 0.2,
    ignoreLocation: true,
    minMatchCharLength: 3,
    includeMatches: true
  });
}
