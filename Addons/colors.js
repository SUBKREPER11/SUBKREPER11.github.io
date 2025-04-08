function getDominantColorsFromGitHubAvatar(src, callback) {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
  
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);
  
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  
      const colorMap = {};
      for (let i = 0; i < imageData.length; i += 4) {
        const r = imageData[i];
        const g = imageData[i + 1];
        const b = imageData[i + 2];
        const key = `${Math.round(r / 16) * 16},${Math.round(g / 16) * 16},${Math.round(b / 16) * 16}`;
        colorMap[key] = (colorMap[key] || 0) + 1;
      }
  
      const sortedColors = Object.entries(colorMap)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([key]) => `rgb(${key})`);
  
      if (typeof callback === "function") {
        callback(sortedColors);
      } else {
        // Domyślnie ustaw gradient
        applyGradientToAnimatedBackground(sortedColors);
      }
    };
  
    img.onerror = () => {
      console.error("Nie udało się załadować obrazka:", src);
    };
  }
  
  function applyGradientToAnimatedBackground(colors) {
    const gradient = `linear-gradient(45deg, ${colors.join(", ")})`;
    const elements = document.querySelectorAll(".animated-background");
    elements.forEach(el => {
      el.style.background = gradient;
      el.style.backgroundSize = "150% 150%";
      el.style.animation = "gradient 15s ease infinite";
    });
  }
  
  // Automatyczne wywołanie
  getDominantColorsFromGitHubAvatar("https://avatars.githubusercontent.com/u/80513311");