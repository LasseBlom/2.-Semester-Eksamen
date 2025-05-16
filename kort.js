// Afspiller kort 1.1
const kort1 = new Audio('sounds/5til10.m4a');
function afspil5til10() {
    kort1.play();
}

// Afspiller kort 2.1
const kort2 = new Audio('sounds/urolig.m4a');
function afspilurolig() {
    kort2.play();
}

// Afspiller kort 2.2
//Når man trykke på højtaleren afspilles lyden - det er ikke muligt,
//at få den til at afspille automatisk grundet browsere blokerer automatisk lyd
const korthjerte = new Audio('sounds/hjerte.mp3');
function afspilhjerte() {
    korthjerte.play();
}

// Afspiller kort 3.1
const kort3 = new Audio('sounds/bange.m4a');
function afspilbange() {
    kort3.play();
}

// Afspiller kort 4.1
const kort4 = new Audio('sounds/symptomer.m4a');
function afspilsymptomer() {
    kort4.play();
}

//Video
window.addEventListener('load', function () {
    const video = document.getElementById('minVideo');
    setTimeout(() => {
        // Vent 2 sekunder før videoen afspilles
        video.muted = false; // Slå lyden til
    }, 2000); // 2 sekunder
});
