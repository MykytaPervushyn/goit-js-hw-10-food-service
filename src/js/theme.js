const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const themeSwitchRef = document.querySelector('#theme-switch-toggle');

themeSwitchRef.addEventListener('change', onThemeChange);

saveChangedTheme();

function onThemeChange(e) {
  if (e.currentTarget.checked) {
    document.body.classList.add(Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
    localStorage.setItem('Theme', Theme.LIGHT);
  }
}

function saveChangedTheme() {
  const changedTheme = localStorage.getItem('Theme');

   if (changedTheme === Theme.DARK) {
        themeSwitchRef.checked = true;
        document.body.classList.add(Theme.DARK);
  }
  else
  {
    themeSwitchRef.checked = false;
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
  }
};

