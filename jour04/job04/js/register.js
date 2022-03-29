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
    let regexListNum = /^[0-9]*$/
    let regexMinLength = /^[a-zA-Z]{3,}$/


    nom.addEventListener("keyup", () => {
        //on verifie si la regular expression est dans la valeur du nom (this.value= nom)
        console.log(regexSpeCharac.test(nom.value))
        console.log(regexMinLength.test(nom.value))
        if (regexSpeCharac.test(nom.value) !== null) {
            // on integre du text avec .text content
            p[0].textContent = "pas de caractère spéciaux"
            // on mondifie le style avec la commande style.color
            p[0].style.color = 'red'
        }

        else if (regexNumber.test(nom.value) === true) {
            p[0].textContent = "pas de nombre "
            p[0].style.color = 'red'

        } else if (regexMinLength.test(nom.value) === false) {
            p[0].textContent = "trop cour"
            p[0].style.color = 'red'
        }
        else {
            p[0].textContent = ''
            prenom.style.color = 'black'

        }
    }



    )

    prenom.addEventListener("keydown", () => {
        if (prenom.length < 3) {
            p[1].innerhtml = 'le prenom est trop court'
        } else {
            p[1].innerHTML = ''
        }
    })

    email.addEventListener("keyup", () => {
        if (email.match(regEmail)) {
            p[2].innerhtml = ''
        } else {
            p[2].innerHTML = 'email invalide'
        }
    })


    password.addEventListener("keydown", () => {

        if (password.match(strongRegex)) {

        }



    })



})