// Hent navne fra localStorage eller brug standard
document.getElementById("spiller1-navn").textContent = localStorage.getItem("spiller1") 
document.getElementById("spiller2-navn").textContent = localStorage.getItem("spiller2") 

// Eksempel: stik-tællere
let spiller1Stik = 0;
let spiller2Stik = 0;

function givStikTilSpiller1() {
  spiller1Stik++;
  document.getElementById("spiller1-stik").textContent = spiller1Stik;
}

function givStikTilSpiller2() {
  spiller2Stik++;
  document.getElementById("spiller2-stik").textContent = spiller2Stik;
}
