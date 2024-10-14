const toggle = document.getElementById('themeToggle');

// Funkcja do zmiany motywu
function setTheme(theme) {
    const link = document.getElementById('theme-stylesheet');
    if (theme === 'dark') {
        link.setAttribute('href', '/PWAApp/addons/dark.css');
    } else {
        link.setAttribute('href', '/PWAApp/addons/light.css');
    }
    localStorage.setItem('theme', theme);
}

// Sprawdzenie, czy toggle istnieje (czyli czy jest w settings.html)
if (toggle) {
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
}

// Ustaw motyw przy starcie w index.html
const savedTheme = localStorage.getItem('theme') || 'light';
const link = document.getElementById('theme-stylesheet');
link.setAttribute('href', savedTheme === 'dark' ? '/PWAApp/addons/dark.css' : '/PWAApp/addons/light.css');

// Ustaw tło przy starcie
const backgroundImageDiv = document.getElementById('background-image');
const backgroundImage = localStorage.getItem('backgroundImage');

if (backgroundImage) {
    backgroundImageDiv.style.backgroundImage = `url(${backgroundImage})`;
    backgroundImageDiv.style.backgroundSize = 'cover';
    backgroundImageDiv.style.backgroundPosition = 'center';
}