// Highlights the TOC anchors and keeps track of the current highlighted anchor.
class TOCHighlighter {
  constructor(toc) {
    this.toc = toc;
    this.current = null;
  }

  highlight(anchor) {
    this.reset();
    anchor.classList.add('is-active');
    this.current = anchor;
  }

  highlightByID(id) {
    const anchor = this.toc.querySelector(`[href="#${id}"]`);
    if (anchor) {
      this.highlight(anchor);
    }
  }

  reset() {
    if (this.current) {
      this.current.classList.remove('is-active');
    }
  }
}

// Used to observe and unobserve headings for highlihgting.
class HeadingObserver {
  constructor(toc, reset, headings) {
    this.headings = headings;
    const highlighter = new TOCHighlighter(toc);
    this.observer = new IntersectionObserver(
      (entries) => {
        const active = entries.filter((entry) => entry.isIntersecting);
        // Only find the active anchor when there is at least one intersecting
        // Entry.
        if (active.length > 0) {
          if (active[0].target === reset) {
            highlighter.reset();
          }
          highlighter.highlightByID(active[0].target.id);
        }
      },
      {
        // Set margins for the observer so it only observes the top of the page.
        rootMargin: '0px 0px -70% 0px',
        threshold: 0.8
      }
    );
  }

  connect() {
    this.headings.forEach((heading) => {
      this.observer.observe(heading);
    });
  }

  disconnect() {
    this.observer.disconnect();
  }
}

// Sets up TOC highlight and enables or disables it based on it's visibility.
function observeTOC(toc, reset, headings) {
  const headingObserver = new HeadingObserver(toc, reset, headings);
  const tocObserver = new IntersectionObserver((entries) => {
    // Connect or disconnect the observer whether the TOC is intersecting or not.
    const anyIntersecting = entries.some((entry) => entry.isIntersecting);
    if (anyIntersecting) {
      headingObserver.connect();
    } else {
      headingObserver.disconnect();
    }
  });
  tocObserver.observe(toc);
}

export default function init() {
  const toc = document.getElementById('TableOfContents');
  if (toc) {
    const targets = document.querySelectorAll(
      '.content-title, .content h1, .content h2, .content h3, .content h4, .content h5, .content h6'
    );
    const reset = document.getElementsByClassName('content-title')[0];
    observeTOC(toc, reset, targets);
  }
}
