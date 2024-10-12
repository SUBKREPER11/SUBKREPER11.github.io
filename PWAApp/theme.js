const themeToggle = document.getElementById('themeToggle');

// Sprawdzenie, czy w localStorage jest zapisany motyw
const currentTheme = localStorage.getItem('theme') || 'light';
document.body.className = currentTheme;

// Ustawienie stanu checkboxa na podstawie aktualnego motywu
themeToggle.checked = currentTheme === 'dark';

// Funkcja zmieniająca motyw
themeToggle.addEventListener('change', () => {
    const newTheme = themeToggle.checked ? 'dark' : 'light';
    document.body.className = newTheme;

    // Zapisanie wybranego motywu w localStorage
    localStorage.setItem('theme', newTheme);
    
    // Ładowanie odpowiedniego pliku CSS
    const themeStylesheet = document.getElementById('theme-stylesheet');
    if (newTheme === 'dark') {
        themeStylesheet.href = './dark.css';
    } else {
        themeStylesheet.href = './light.css';
    }
});