// Til index, når der bliver trykket et vilkårligt sted på skærmen
const startOverlay1 = document.getElementById('startOverlay1');
if (startOverlay1) {
    startOverlay1.addEventListener('click', function () {
        window.location.href = "intro.html";
    });
}

//Hoppefunktion til kort på forsiden
const bounceCards = document.querySelectorAll('.bouncy'); // Vælger alle kortene med classen 'bouncy'

const maxBounceHeight = 25; // Hvor højt de skal hoppe

bounceCards.forEach(card => { // Går igennem alle kortene og tilføjer en bounce funktion
    card.style.position = 'relative';
    card.style.top = '0px';

    let top = 0;
    let direction = Math.random() > 0.8 ? 1 : -1; // Retning af hop
    const speed = Math.random() * 0.6 + 0.4; // Hastighed af hop
    const delay = Math.random() * 1000; // Forsinkelse inden kortet starter med at hoppe

    setTimeout(() => { // Forsinkelse inden kortet starter med at hoppe
        function bounce() {
            if (top >= maxBounceHeight) { // Hvis kortet når max højde, skifter retning
                direction = -1;
            } else if (top <= 0) { // Hvis kortet når bunden, skifter retning
                direction = 1;
            }

            top += direction * speed;
            card.style.top = top + 'px'; // Opdaterer kortets position

            requestAnimationFrame(bounce); // Animerer hoppefunktionen
        }

        bounce();
    }, delay);
});
