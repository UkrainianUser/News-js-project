const THEME_KEY = 'theme';
const themeToggle = document.querySelector('#toggle');
themeToggle.addEventListener('change', onThemeToggleClick);
getTheme();
function onThemeToggleClick(e) {
  if (e.target.checked) {
    document.body.dataset.theme = 'dark';
    localStorage.setItem(THEME_KEY, 'dark');
  } else {
    document.body.dataset.theme = 'light';
    localStorage.removeItem(THEME_KEY, 'dark');
  }
}
function getTheme() {
  try {
    if (
      localStorage.getItem(THEME_KEY) !== null &&
      localStorage.getItem(THEME_KEY) === 'dark'
    ) {
      themeToggle.checked = true;
      document.body.dataset.theme = 'dark';
    } else {
      themeToggle.checked = false;
      document.body.dataset.theme = 'light';
    }
  } catch (error) {
    console.log(error);
  }
}