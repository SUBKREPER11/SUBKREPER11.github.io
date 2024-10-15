let currentPage = 0;
const pages = document.querySelectorAll('.page');

function showPage(index) {
    pages.forEach((page, i) => {
        if (i === index) {
            page.style.display = 'block'; // Pokazuje bieżącą stronę
            page.style.transform = 'translateX(0)'; // Ustawia stronę w pierwotnej pozycji
        } else {
            page.style.display = 'none'; // Ukrywa inne strony
            page.style.transform = 'translateX(100%)'; // Przesuwa je w prawo
        }
    });
}

document.getElementById('prev').addEventListener('click', () => {
    currentPage = (currentPage > 0) ? currentPage - 1 : pages.length - 1;
    showPage(currentPage);
});

document.getElementById('next').addEventListener('click', () => {
    currentPage = (currentPage < pages.length - 1) ? currentPage + 1 : 0;
    showPage(currentPage);
});

// Inicjalizuje pierwszy widok
showPage(currentPage);