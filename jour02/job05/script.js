document.addEventListener("DOMContentLoaded", () => {
    function loadBarre() {

        const winScroll = document.body.scrollTop || document.documentElement.scrollTop; // calcul le nb de pixel par rapport au top
    
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight; // resultat du scrollTop
    
        const scrolled = (winScroll / height) * 100; //
    
        document.getElementById("myBar").style.width = scrolled + "%";
    
    }
    
    document.onscroll = function () {
    
        loadBarre()
    };});