// Til index, når der bliver trykket et vilkårligt sted på skærmen
const startOverlay1 = document.getElementById('startOverlay1');
if (startOverlay1) {
    startOverlay1.addEventListener('click', function () {
        window.location.href = "intro.html";
    });
}

