// Funkcja do ustawienia tła z przesłanego obrazka
    function setBackgroundImage(imageURL) {
        const backgroundImageDiv = document.getElementById('background-image');
        backgroundImageDiv.style.backgroundImage = `url('${imageURL}')`;
    }

// Obsługa przesyłania pliku
document.getElementById('backgroundUploader').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            setBackgroundImage(e.target.result); // Ustawienie tła
        };
        reader.readAsDataURL(file); // Odczytanie pliku jako URL
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const backgroundDiv = document.getElementById('background-image');
    const savedBackground = localStorage.getItem('backgroundImage');
    
    // Jeśli w localStorage istnieje zapisane tło, ustaw je
    if (savedBackground) {
        backgroundDiv.style.backgroundImage = `url(${savedBackground})`;
        backgroundDiv.style.backgroundSize = 'cover';
        backgroundDiv.style.backgroundPosition = 'bottom'; // Priorytet dolnej części obrazu
        backgroundDiv.style.backgroundRepeat = 'no-repeat';
    }

    const input = document.getElementById('backgroundUploader');
    input.addEventListener('change', function () {
        const file = input.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const imageUrl = e.target.result;
            // Ustaw tło dla div z klasą 'background-image'
            backgroundDiv.style.backgroundImage = `url(${imageUrl})`;
            backgroundDiv.style.backgroundSize = 'cover';
            backgroundDiv.style.backgroundPosition = 'bottom'; // Priorytet dolnej części obrazu
            backgroundDiv.style.backgroundRepeat = 'no-repeat';

            // Zapisz obraz w localStorage
            localStorage.setItem('backgroundImage', imageUrl);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    });
});