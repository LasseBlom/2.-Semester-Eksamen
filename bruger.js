// Afspil oplæsning
const introLyd = new Audio('sounds/navn.m4a');

// Afspiller brugerlyden
function afspilBrugerlyd() {
    introLyd.play();
}

// Viser "START SPIL"-knappen når begge navnefelter er udfyldt
const spiller1 = document.getElementById("spiller1");
const spiller2 = document.getElementById("spiller2");
const startKnap = document.getElementById("startSpilKnap");

function tjekNavne() {
    const navn1 = spiller1.value.trim();
    const navn2 = spiller2.value.trim();

    if (navn1 && navn2) {
        startKnap.style.display = "block";
        spiller2.placeholder = ""; //Fjern placeholder hvis begge navne er skrevet
    } else {
        startKnap.style.display = "none";

        //Hvis spiller 1 har skrvete navn, men spiller 2 ikke har
        if (navn1 && !navn2) {
            spiller2.placeholder = "Husk at skrive navn her";
        } else {
            spiller2.placeholder = ""; //Fjern placeholder, hvis det ike er relevant
        }
    }
}

//Når brugeren skriver i ét af felterne - tjek at begge er udfyldt
spiller1.addEventListener("input", tjekNavne);
spiller2.addEventListener("input", tjekNavne);

// Når der trykkes på knappen, gem navne og gå til næste side
function startSpil() {
    const navn1 = spiller1.value.trim();
    const navn2 = spiller2.value.trim();

    localStorage.setItem("spiller1", navn1);
    localStorage.setItem("spiller2", navn2);

    window.location.href = "vendespil.html";
}
