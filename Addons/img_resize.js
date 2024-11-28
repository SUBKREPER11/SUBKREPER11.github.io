function updateStylesheet() {
    var width = window.innerWidth;
    var height = window.innerHeight;

    console.log(width + "x" + height);

    // Usuń istniejący dynamicznie dodany plik CSS, jeśli istnieje
    var existingLink = document.querySelector('link[data-dynamic="true"]');
    if (existingLink) {
        existingLink.remove();
    }

    // Dodaj nowy plik CSS na podstawie aktualnych wymiarów
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.dataset.dynamic = "true"; // Dodajemy znacznik, aby można było łatwo zidentyfikować plik
    link.href = width > height ? "Addons/style-large.css" : "Addons/style-small.css";

    document.head.appendChild(link);
}

// Uruchom funkcję podczas ładowania strony
window.addEventListener("load", updateStylesheet);

// Uruchom funkcję podczas zmiany rozmiaru okna (np. obrót telefonu)
window.addEventListener("resize", updateStylesheet);