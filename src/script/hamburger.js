const button = document.getElementById('navbar-hamburger');
const menu = document.getElementById('hamburger-menu');

function openHamburgerMenu() {
  button.setAttribute('aria-expanded', 'true');
  menu.classList.add('l-sidemenu-active');
  document.body.classList.add('l-sidemenu-noscroll');
}

function closeHamburgerMenu() {
  button.setAttribute('aria-expanded', 'false');
  menu.classList.remove('l-sidemenu-active');
  document.body.classList.remove('l-sidemenu-noscroll');
}

function toggleHamburgerMenu() {
  const expanded = button.attributes['aria-expanded'].value === 'true';
  if (!expanded) {
    openHamburgerMenu();
  } else {
    closeHamburgerMenu();
  }
}

export default function init() {
  const hamburgerButton = document.getElementById('navbar-hamburger');
  hamburgerButton.addEventListener('click', toggleHamburgerMenu);
}
