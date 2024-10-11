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