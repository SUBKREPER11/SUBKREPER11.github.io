console.log('Aplikacja PWA działa!');
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/PWAApp/service-worker.js')
        .then((registration) => {
            console.log('Service Worker zarejestrowany:', registration.scope);
        })
        .catch((error) => {
            console.log('Błąd rejestracji Service Workera:', error);
        });
}
