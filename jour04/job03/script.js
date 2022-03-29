document.addEventListener("DOMContentLoaded", () => {
    let idPoke = document.querySelector("[name='id']");
    let namePoke = document.querySelector("[name='nom']");
    let type = document.getElementById('type');
    let bouton = document.getElementById('button');


    //-----------------------------gestions des type de pokemon
    fetch('pokemon.json')
        .then(response => response.json())
        .then((response) => {
            let newArray2 = []
            let newArray = []
            let compteur = 0
            let bool = true

            for (let i = 0; i < 150; i++) {
                let typePokemon = response[i].type[0]
                bool = true
                compteur = 0

                for (let compteur = 0; compteur < 150; compteur++) {

                    if (response[i].type[0] == newArray[compteur]) {
                        bool = false
                        break
                    }
                }
                if (bool) {

                    newArray.push(typePokemon.toString())

                }
            }
            for (let j = 0; j < newArray.length; j++) {
                newOpt1 = document.createElement('option'),
                    newOpt1.innerHTML = newArray[j],
                    type.append(newOpt1)
            }

            bouton.addEventListener('click', () => {

                let tab =
                    `<tr>
                    <th>id</th>
                    <th>name</th>
                    <th>type</th>
                    <th>Base</th>
                </tr>`;

                for (let row of response) {
                    //----------------------------recherche par id -------------------------------------------------
                    if (row.id == idPoke.value) {
                        tab += `<tr> 
                    <td>${row.id} </td>
                    <td>${row.name.french},
                        ${row.name.english},
                        ${row.name.chinese}, 
                        ${row.name.japanese}</td>
                    <td>${row.type}</td> 
                    <td>'HP = '${row.base.HP}, 
                        'Attack = '${row.base.Attack}, 
                        'Defense = '${row.base.Defense}, 
                        'Sp. Attack = '${row.base.SpAttack},
                        'Sp. Defense = '${row.base.SpDefense}, 
                        'Speed = '${row.base.SpAttack},
                        </td>         
                </tr>`;
                    } else if (row.name.french == namePoke.value || row.name.english == namePoke.value) {
                        //----------------------------recherche par nom-------------------------------------------------
                        tab += `<tr> 
                    <td>${row.id} </td>
                    <td>${row.name.french},
                        ${row.name.english},
                        ${row.name.chinese}, 
                        ${row.name.japanese}</td>
                    <td>${row.type}</td> 
                    <td>'HP = '${row.base.HP}, 
                        'Attack = '${row.base.Attack}, 
                        'Defense = '${row.base.Defense}, 
                        'Sp. Attack = '${row.base.SpAttack},
                        'Sp. Defense = '${row.base.SpDefense}, 
                        'Speed = '${row.base.SpAttack},
                        </td>         
                </tr>`;
                    } else if (row.type[0] == type.value || row.type[1] == type.value) {
                        //----------------------------recherche par type-------------------------------------------------
                        tab += `<tr> 
                <td>${row.id} </td>
                <td>${row.name.french},
                    ${row.name.english},
                    ${row.name.chinese}, 
                    ${row.name.japanese}</td>
                <td>${row.type}</td> 
                <td>'HP = '${row.base.HP}, 
                    'Attack = '${row.base.Attack}, 
                    'Defense = '${row.base.Defense}, 
                    'Sp. Attack = '${row.base.SpAttack},
                    'Sp. Defense = '${row.base.SpDefense}, 
                    'Speed = '${row.base.SpAttack},
                    </td>         
            </tr>`;
                    }
                }

                document.getElementById("pokemon").innerHTML = tab;


            }


            )
        })
})
