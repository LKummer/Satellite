function findWordsBefore(content, matchStart, wordCount) {
  let index = matchStart;
  for (let i = 0; i < wordCount + 1; i++) {
    while (index > 0 && content[index] !== '\n' && content[index] !== ' ') {
      index--;
    }
    if (content[index] === '\n') {
      return index + 2;
    }
    index--;
  }
  return index + 1;
}

function findWordsAfter(content, matchEnd, wordCount) {
  let index = matchEnd;
  for (let i = 0; i < wordCount + 1; i++) {
    while (
      index < content.length &&
      content[index] !== '\n' &&
      content[index] !== ' '
    ) {
      index++;
    }
    if (content[index] === '\n') {
      return index;
    }
    index++;
  }
  return index;
}

function lineInContent(content, matchStart) {
  // Lines start from 1.
  let count = 1;
  for (const char of content.substring(0, matchStart)) {
    if (char === '\n') {
      count += 1;
    }
  }
  return count;
}

function findHeadingPermalink(headings, line, pagePermalink) {
  const currentHeading = headings.find((heading) => heading.line <= line);
  // Return page permalink if current line is above all headings.
  return (currentHeading && currentHeading.href) || pagePermalink;
}

function renderContentMatch(
  content,
  matchStart,
  matchEnd,
  permalink,
  headings
) {
  const line = lineInContent(content, matchStart);
  const matchCard = document.createElement('a');
  matchCard.classList.add(
    'search-results-links-item',
    'search-results-links-match'
  );
  matchCard.href = findHeadingPermalink(headings, line, permalink);
  const previewBegin = document.createElement('span');
  previewBegin.innerText = content.substring(
    findWordsBefore(content, matchStart, 4),
    matchStart
  );
  previewBegin.classList.add('search-results-links-match-preview');
  matchCard.appendChild(previewBegin);
  const highlight = document.createElement('span');
  highlight.innerText = content.substring(matchStart, matchEnd + 1);
  highlight.classList.add('search-results-links-match-highlight');
  matchCard.appendChild(highlight);
  const preview = document.createElement('span');
  preview.innerText = content.substring(
    matchEnd + 1,
    findWordsAfter(content, matchEnd, 4)
  );
  preview.classList.add('search-results-links-match-preview');
  matchCard.appendChild(preview);
  const li = document.createElement('li');
  li.classList.add('search-results-links-match-wrapper');
  li.appendChild(matchCard);
  return li;
}

function renderItem({ item, matches }) {
  const { title, permalink, content, headings } = item;
  const renderedElements = [];
  const li = document.createElement('li');
  renderedElements.push(li);
  const anchor = document.createElement('a');
  anchor.href = permalink;
  anchor.innerText = title;
  anchor.classList.add('search-results-links-item');
  li.appendChild(anchor);
  matches.forEach((match) => {
    const longestMatches = match.indices.reduce((acc, cur) => {
      const toInsert = acc.findIndex((e) => e[1] - e[0] < cur[1] - cur[0]);
      if (acc.length < 3) {
        acc.splice(toInsert, 0, cur);
        return acc;
      }
      if (toInsert < 3) {
        acc.splice(toInsert, 0, cur);
        acc.pop();
        return acc;
      }
      return acc;
    }, []);
    for (const longestMatch of longestMatches) {
      if (match.key === 'content') {
        renderedElements.push(
          renderContentMatch(
            content,
            longestMatch[0],
            longestMatch[1],
            permalink,
            headings
          )
        );
      }
    }
  });
  return renderedElements;
}

function renderSection(name, items) {
  const title = document.createElement('h2');
  title.innerText = name;
  title.classList.add('search-results-section');
  const list = document.createElement('ul');
  for (const item of items) {
    for (const renderedItem of renderItem(item)) {
      list.appendChild(renderedItem);
    }
  }
  list.classList.add('search-results-links');
  return [title, list];
}

export function renderResults(results) {
  const sections = new Map();
  for (const result of results) {
    const currentSection = sections.get(result.item.section);
    if (currentSection instanceof Array) {
      currentSection.push(result);
    } else {
      sections.set(result.item.section, [result]);
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
