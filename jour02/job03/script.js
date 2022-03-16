'use strict';
document.addEventListener("DOMContentLoaded", () => {
    let bouton = document.getElementById('button');

    let count = document.getElementById('compteur');
    console.log(count);
    let compteur = 0
    bouton.addEventListener('click', () => {
        compteur = compteur + 1
        count.textContent = compteur
        console.log(compteur);
    }
    )
})
