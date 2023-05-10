import { PopupAnimator } from './search/popup-animator';
import { createPopper } from '@popperjs/core';

const button = document.getElementById('version-select');
const menu = document.getElementById('version-menu');
const popper = createPopper(button, menu, {
  placement: 'bottom-end',
  modifiers: [{ name: 'offset', options: { offset: [0, 16] } }]
});
const animator = new PopupAnimator(menu, popper, {
  showClass: 'version-menu-active',
  showAnimationClass: 'version-menu-show',
  hideAnimationClass: 'version-menu-hide'
});

function openVersionMenu() {
  button.setAttribute('aria-expanded', 'true');
  animator.show();
}

function closeVersionMenu() {
  button.setAttribute('aria-expanded', 'false');
  animator.hide();
}

function toggleVersionMenu() {
  const expanded = button.attributes['aria-expanded'].value === 'true';
  if (!expanded) {
    openVersionMenu();
  } else {
    closeVersionMenu();
  }
}

export default function init() {
  button.addEventListener('click', toggleVersionMenu);
  document.addEventListener('focusout', ({ relatedTarget }) => {
    if (relatedTarget === null) {
      closeVersionMenu();
      return;
    }
    const pos = menu.compareDocumentPosition(relatedTarget);
    if (!(pos & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
      closeVersionMenu();
    }
  });
}
