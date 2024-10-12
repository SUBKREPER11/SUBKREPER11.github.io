const toggle = document.getElementById('themeToggle');

// Funkcja do zmiany motywu
function setTheme(theme) {
    const link = document.getElementById('theme-stylesheet');
    if (theme === 'dark') {
        link.setAttribute('href', '/PWAApp/dark.css');
    } else {
        link.setAttribute('href', '/PWAApp/light.css');
    }
    localStorage.setItem('theme', theme);
}

// Zdarzenie zmiany checkboxa
toggle.addEventListener('change', () => {
    if (toggle.checked) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
});

// Ustaw motyw przy starcie
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);
toggle.checked = savedTheme === 'dark';