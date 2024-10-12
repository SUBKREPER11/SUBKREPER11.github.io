// Funkcja do ustawienia motywu
function setTheme(theme) {
    const themeStylesheet = document.getElementById('themeStylesheet');
    if (theme === 'dark') {
        themeStylesheet.href = './dark.css';
        localStorage.setItem('theme', 'dark');
    } else {
        themeStylesheet.href = './light.css';
        localStorage.setItem('theme', 'light');
    }
}

// Sprawdź zapisany motyw po załadowaniu strony
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        // Ustaw stan checkboxa zgodnie z zapisanym motywem
        themeToggle.checked = (savedTheme === 'dark');

        // Dodaj event listener dla zmiany motywu
        themeToggle.addEventListener('change', function () {
            if (this.checked) {
                setTheme('dark');
            } else {
                setTheme('light');
            }
        });
    }
});