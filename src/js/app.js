const root = document.getElementById("root")

function setTheme() {
    const themeStyle = document.getElementById('theme-style');
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        themeStyle.setAttribute('href', 'dark-theme.css');
    } else {
        themeStyle.setAttribute('href', 'light-theme.css');
    }
}

// Set the theme on initial load
setTheme();

// Optional: Listen for changes to the theme preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setTheme);