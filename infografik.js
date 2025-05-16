"use strict";

// Når hele siden inkl. billeder og ressourcer er loadet
window.onload = function () {
  // Vent 1 sekunder før koden kører
  setTimeout(() => {
    const container = document.querySelector('.billedeContainer');
    if (container) {
      // Tilføj klassen 'fade-over' for at trigge en visuel effekt/animation
      container.classList.add('fade-over');
    }
  }, 1000); // 1 sekunder
};