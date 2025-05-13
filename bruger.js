// Lydikon
function toggleSound() {
    alert("Lyd slået til/fra (du kan erstatte dette med rigtig lyd senere)");
}

// Viser "START SPIL"-knappen når begge navnefelter er udfyldt
const spiller1 = document.getElementById("spiller1");
const spiller2 = document.getElementById("spiller2");
const startKnap = document.getElementById("startSpilKnap");
const spiller2Hint = document.getElementById("spiller2Hint");

function tjekNavne() {
    const navn1 = spiller1.value.trim();
    const navn2 = spiller2.value.trim();

    if (navn1 && navn2) {
        startKnap.style.display = "block";
        spiller2.placeholder = ""; // Fjern placeholder hvis begge har skrevet
    } else {
        startKnap.style.display = "none";

        // Hvis spiller 1 har skrevet, men spiller 2 ikke har
        if (navn1 && !navn2) {
            spiller2.placeholder = "Husk at skrive navn her";
        } else {
            spiller2.placeholder = ""; // Fjern placeholder hvis ikke relevant
        }
    }
}

// Når brugeren skriver i ét af felterne, tjek om begge er udfyldt
spiller1.addEventListener("input", tjekNavne);
spiller2.addEventListener("input", tjekNavne);

// Når der trykkes på knappen, gå til næste side
function startSpil() {
    window.location.href = "vendespil.html";
}