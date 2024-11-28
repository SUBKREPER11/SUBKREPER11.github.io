window.onload = function() {
    var object = document.querySelector('.link'); // Wybieramy element <object> z klasą .link
    var svgDoc = object.contentDocument; // Uzyskujemy dostęp do zawartości SVG

    // Jeśli SVG zostało załadowane, zmieniamy kolor
    if (svgDoc) {
      var path = svgDoc.querySelector('path'); // Wybieramy element <path> w SVG
      if (path) {
        path.setAttribute('fill', 'rgba(255, 255, 255, 0.5)'); // Zmieniamy kolor na pożądany
      }
    }
  };