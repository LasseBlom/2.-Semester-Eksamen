//Til index
document.getElementById('startOverlay').addEventListener('click', function () {
    window.location.href = "intro.html";
});

//Til intro
function hideOverlay() {
    document.getElementById("startOverlay").style.display = "none";
}

function toggleSound() {
    alert("Lyd slået til/fra (du kan erstatte dette med rigtig lyd senere)");
}