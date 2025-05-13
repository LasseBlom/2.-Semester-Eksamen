// Lydikon
function toggleSound() {
    alert("Lyd slået til/fra (du kan erstatte dette med rigtig lyd senere)");
}

// Viser "START SPIL"-knappen når begge navnefelter er udfyldt
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const startKnap = document.getElementById("startSpilKnap");

// Funktion der tjekker om begge inputfelter har tekst i sig
function tjekNavne() {
    if (player1.value.trim() && player2.value.trim()) {
        // Begge felter er udfyldt -> vis knappen
        startKnap.style.display = "block";
    } else {
        // Mindst ét felt er tomt -> skjul knappen
        startKnap.style.display = "none";
    }
}

// Når brugeren skriver i ét af felterne, tjek om begge er udfyldt
player1.addEventListener("input", tjekNavne);
player2.addEventListener("input", tjekNavne);

// Når der trykkes på knappen, gå til næste side
function startSpil() {
    window.location.href = "vendespil.html";
}