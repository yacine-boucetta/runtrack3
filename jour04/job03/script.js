

// function getName(name){
//         name.value
//         console.log(name.values)
//     }

//     function getType(type){}
document.addEventListener("DOMContentLoaded", () => {
    let id = document.querySelector("[name='id']");
    let name = document.querySelector("[name='nom']");
    let type = document.querySelector("[name='type']");
    let bouton = document.getElementById('button');

    fetch('pokemon.json')

        .then(response => response.json())
        .then((response) => {
            console.log(response)
        }
        )

    bouton.addEventListener('click', (e) => {
        e.preventDefault(bouton);
        for (let i = 0; i < 150, i+1; ) {
            fetch('pokemon.json') 
            .then(response => response.json())
        .then((response) => {
            if(response[i][id]===id.value){
            
        
        
            console.log(response[id])
            }

   
})

    }})})
        

    
 