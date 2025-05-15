// Afspil oplæsning
const introLyd = new Audio('sounds/navn.m4a');

// Afspiller brugerlyden
function afspilBrugerlyd() {
    introLyd.play();
}

// Hent elementerne for spiller 1 og spiller 2 samt startknappen
const spiller1 = document.getElementById("spiller1");
const spiller2 = document.getElementById("spiller2");
const startKnap = document.getElementById("startSpilKnap");

// Funktion til at tjekke, om begge navnefelter er udfyldt
function tjekNavne() {
    const navn1 = spiller1.value.trim(); // Hent og trim (fjerne mellemrum) spiller 1's navn
    const navn2 = spiller2.value.trim(); // Hent og trim (fjerne mellemrum) spiller 1's navn

    // Tjek om begge navne er udfyldt
    if (navn1 && navn2) {
        startKnap.style.display = "block"; // Vis startknappen
        spiller2.placeholder = ""; //Fjern placeholder hvis begge navne er skrevet
    } else {
        startKnap.style.display = "none"; // Skjul startknappen

        // Hvis spiller 1 har skrevet navn, men spiller 2 ikke har
        if (navn1 && !navn2) {
            spiller2.placeholder = "Husk at skrive navn her"; // Vis reminder til spiller 2
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

    // Gem navne i localStorage, så de kan bruges på næste side
    localStorage.setItem("spiller1", navn1);
    localStorage.setItem("spiller2", navn2);

    // Omdiriger brugeren til 'vendespil.html'
    window.location.href = "vendespil.html";
}
