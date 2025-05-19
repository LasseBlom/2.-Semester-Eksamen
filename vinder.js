"use strict";

// Hent spiller 1's navn fra localStorage
const spiller1Navn = localStorage.getItem("spiller1");

// Find elementet hvor navnet skal indsættes
const navnElement = document.getElementById("vinderNavn");

// Indsæt navnet i DOM'en, hvis det findes
if (spiller1Navn && navnElement) {
    navnElement.textContent = spiller1Navn;
} else {
    navnElement.textContent = "Ukendt Vinder";
}