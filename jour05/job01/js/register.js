document.addEventListener("DOMContentLoaded", () => {
    let password = document.querySelector("[name='password']")
    let password2 = document.querySelector("[name='password2']")
    let nom = document.querySelector("[name='nom']")
    let prenom = document.querySelector("[name='prenom']")
    let email = document.querySelector("[name='email']")
    let p = document.querySelectorAll("p")


    let regexLowerCase = /[a-z]{1,}/
    let regexUpperCase = /[A-Z]{1,}/
    let regexNumber = /[0-9]{1,}/
    let ValidMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let regexSpeCharac = /^[^@&".()!_$*€£`+=\/;?#]+$/
    let regexMinLength = /^[a-zA-Z]{3,}$/
    let passwordMinLength = /^[A-Za-z0-9\d@$!%*?&].{8,}$/


    nom.addEventListener("keyup", () => {
        //on verifie si la regular expression est dans la valeur du nom (this.value= nom)
        if (regexSpeCharac.test(nom.value) == false) {
            // on integre du text avec .text content
            p[0].textContent = "pas de caractère spéciaux"
            // on mondifie le style avec la commande style.color
            p[0].style.color = 'red'
        }

        else if (regexNumber.test(nom.value) === true) {
            p[0].textContent = "pas de nombre "
            p[0].style.color = 'red'

        } 
        
        else if (regexMinLength.test(nom.value) === false) {
            p[0].textContent = "trop cour"
            p[0].style.color = 'red'
        }
        else {
            p[0].textContent = ''
            prenom.style.color = 'grey'
        }
    }



    )

    prenom.addEventListener("keyup", () => {
        //on verifie si la regular expression est dans la valeur du nom (this.value= nom)
        if (regexSpeCharac.test(prenom.value) == false) {
            // on integre du text avec .text content
            p[1].textContent = "pas de caractère spéciaux"
            // on mondifie le style avec la commande style.color
            p[1].style.color = 'red'
        }

        else if (regexNumber.test(prenom.value) === true) {
            p[1].textContent = "pas de nombre "
            p[1].style.color = 'red'

        } else if (regexMinLength.test(prenom.value) === false) {
            p[1].textContent = "trop cour"
            p[1].style.color = 'red'
        }
        else {
            p[1].textContent = ''
            prenom.style.color = 'blackgrey'
        }
    })

    email.addEventListener("focusout", () => {
        console.log(ValidMail.test(email.value))
        if (ValidMail.test(email.value) == true) {
            p[2].innerhtml = ''
        } else {
            p[2].innerHTML = 'email invalide'
        }
    })


    password.addEventListener("keyup", () => {



        if (regexSpeCharac.test(password.value) == false) {
            // on mondifie le style avec la commande style.color
            p[3].style.color = 'green'

        } else {

            p[3].style.color = 'grey'
        }

        if (regexLowerCase.test(password.value) == true) {
            // on mondifie le style avec la commande style.color
            p[4].style.color = 'green'

        } else {

            p[4].style.color = 'grey'
        }


        if (regexUpperCase.test(password.value) == true) {

            // on mondifie le style avec la commande style.color
            p[5].style.color = 'green'

        } else {

            p[5].style.color = 'grey'
        }


        if (passwordMinLength.test(password.value) == true) {
            console.log(passwordMinLength.test(password.value))
            // on mondifie le style avec la commande style.color
            p[6].style.color = 'green'

        } else {
            p[6].style.color = 'grey'
        }

        if (regexNumber.test(password.value) == true) {

            p[7].style.color = 'green'

        } else {

            p[7].style.color = 'grey'
        }
    }
    )



})