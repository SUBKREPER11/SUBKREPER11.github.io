// Wczytaj navbar
fetch('/Addons/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-container').innerHTML = data;
        setActiveLink(); // Ustaw aktywny link po załadowaniu navbaru
        loadExternalScript('/Addons/script.js'); // Wczytaj zewnętrzny skrypt
    });

// Funkcja do ustawiania aktywnego linku
function setActiveLink() {
    const currentPath = window.location.pathname; // Ścieżka aktualnej strony
    const links = document.querySelectorAll('.navbar a'); // Wybierz wszystkie linki w navbarze

    links.forEach(link => {
        const linkPath = link.getAttribute('href'); // Pobierz href linku
        
        // Porównaj ścieżki
        if (linkPath === currentPath || linkPath === currentPath + '/') {
            link.classList.add('active'); // Dodaj klasę 'active' do odpowiadającego linku
        } else {
            link.classList.remove('active'); // Usuń klasę 'active' z innych linków
        }
    });
}

// Funkcja do wczytywania zewnętrznego skryptu
function loadExternalScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
        console.log(`${src} załadowany!`); // Możesz dodać logikę po załadowaniu
    };
    document.body.appendChild(script);
}