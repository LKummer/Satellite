export default function init() {
  const root = document.querySelector(':root');
  const modeButton = document.getElementById('light-dark-toggle');

  function setLightMode() {
    localStorage.setItem('theme', 'light');
    root.classList.remove('theme-dark');
    root.classList.add('theme-light');
  }
  function setDarkMode() {
    localStorage.setItem('theme', 'dark');
    root.classList.remove('theme-light');
    root.classList.add('theme-dark');
  }

  function toggleLightDarkMode() {
    const mode = localStorage.getItem('theme');
    if (mode === 'light') {
      setDarkMode();
    } else if (mode === 'dark') {
      setLightMode();
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setLightMode();
    } else {
      setDarkMode();
    }
  }

  modeButton.addEventListener('click', () => {
    toggleLightDarkMode();
  });
}
