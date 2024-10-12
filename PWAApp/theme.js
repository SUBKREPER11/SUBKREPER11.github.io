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

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

// Check for saved theme in localStorage
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}