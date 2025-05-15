const kort1 = new Audio('sounds/5til10.m4a');
// Afspiller kort 1.1
function afspil5til10() {
    kort1.play();
}

const kort2 = new Audio('sounds/urolig.m4a');
// Afspiller kort 2.1
function afspilurolig() {
    kort2.play();
}

const korthjerte = new Audio('sounds/hjerte.mp3');
// Afspiller kort 2.2
function afspilhjerte() {
    korthjerte.play();
}

const kort3 = new Audio('sounds/bange.m4a');
// Afspiller kort 3.1
function afspilbange() {
    kort3.play();
}

const kort4 = new Audio('sounds/symptomer.m4a');
// Afspiller kort 4.1
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
