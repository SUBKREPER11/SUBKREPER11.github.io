function updateClock() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    document.getElementById('watch').textContent = `${hours}:${minutes}`;
}

updateClock(); // Wywołanie funkcji, aby ustawić czas od razu
setInterval(updateClock, 5000); // Aktualizacja co minutę