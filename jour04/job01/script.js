document.addEventListener("DOMContentLoaded", () => {
    let bouton = document.getElementById('button');
    let p = document.querySelector('p')
    bouton.addEventListener('click', () => {
        //   url du fichier a recuperer
            fetch('expression.txt')

        // format du fichier 
                .then(response => response.text())
        // on recupère l information
            .then((result) => {
                console.log(result)
                // document.write("<p>" + result + "</p>")
                p.innerHTML = result
            }
            )
    })
})
