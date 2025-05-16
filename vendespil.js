"use strict";

// Hent navne fra localStorage og opdater tekstindholdet for spiller 1 og spiller 2
document.getElementById("spiller1-navn").textContent = localStorage.getItem("spiller1")
document.getElementById("spiller2-navn").textContent = localStorage.getItem("spiller2")

// Hent elementerne til pop-up og podium
const podium = document.getElementById('podium');
const popup = document.getElementById('popupOverlay');

// Åbn pop-up når podiumet klikkes
podium.addEventListener('click', () => {
  popup.style.display = 'flex';
});

// Hvis man klikker udenfor pop-up boksen, så lukker den 
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});

// Luk popup ved klik på kryds
document.getElementById('lukKnap').addEventListener('click', (e) => {
  popup.style.display = 'none';
});

// SPILLER 2 OVERLAY vises i 2 sekunder
const spillerOverlay = document.getElementById('spillerOverlay');
setTimeout(() => {
  spillerOverlay.style.display = 'none';
}, 2000); // skjules efter 2 sekunder
