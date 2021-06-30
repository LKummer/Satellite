import './style/index.scss';

function openHamburgerMenu() {
  console.log('open');
  document
    .getElementById('navbar-hamburger')
    .setAttribute('aria-expanded', 'true');
  document.getElementById('hamburger-menu').classList.add('l-sidemenu-active');
  document.body.classList.add('l-sidemenu-noscroll');
}

function closeHamburgerMenu() {
  console.log('close');
  document
    .getElementById('navbar-hamburger')
    .setAttribute('aria-expanded', 'false');
  document
    .getElementById('hamburger-menu')
    .classList.remove('l-sidemenu-active');
  document.body.classList.remove('l-sidemenu-noscroll');
}

function toggleHamburgerMenu() {
  const expanded =
    document.getElementById('navbar-hamburger').attributes['aria-expanded']
      .value === 'true';
  if (!expanded) {
    openHamburgerMenu();
  } else {
    closeHamburgerMenu();
  }
}

const hamburgerButton = document.getElementById('navbar-hamburger');
hamburgerButton.addEventListener('click', toggleHamburgerMenu);
