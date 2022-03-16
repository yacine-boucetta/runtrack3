'use strict';
document.addEventListener("DOMContentLoaded", () => {
    let bouton = document.getElementById('button');
    let article = document.querySelector('article');

    function showhide() {
if (article.style.display != "block") {

    article.style.display="block";
}else{
    article.style.display="none";
}
    }  
    bouton.addEventListener('click', () => {
        showhide(); 
    }

    )
})
