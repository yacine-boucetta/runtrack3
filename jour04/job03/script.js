document.addEventListener("DOMContentLoaded", () => {
    let idPoke = document.querySelector("[name='id']");
    let namePoke = document.querySelector("[name='nom']");
    let type = document.getElementById('type');
    let bouton = document.getElementById('button');
    let body = document.getElementById('body')
    let p = document.getElementById('p')
    // variable insertion de tableau resultat 

    // mais j'aurais pu concaténé des balise avec un innerhtml   sementique?
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    let row_1 = document.createElement('tr');

    let heading_1 = document.createElement('th');
    let heading_2 = document.createElement('th');
    let heading_3 = document.createElement('th');
    let heading_4 = document.createElement('th')
    let heading_5 = document.createElement('th')
    let heading_6 = document.createElement('th')
    let row_2 = document.createElement('tr');

    let row_2_data_1 = document.createElement('td');
    let row_2_data_2 = document.createElement('td');
    let row_2_data_3 = document.createElement('td');
    let row_2_data_4 = document.createElement('td');
    let row_2_data_5 = document.createElement('td');
    let row_2_data_6 = document.createElement('td');



    fetch('pokemon.json')
        .then(response => response.json())
        .then((response) => {
            let newArray2 = []
            //gestions des type de pokemon
            let newArray = []
            let compteur = 0
            let bool = true

            for (let i = 0; i < 150; i++) {
                let typePokemon = response[i].type
                bool = true
                compteur = 0

                for (let compteur = 0; compteur < 150; compteur++) {

                    if (response[i].type == newArray[compteur]) {
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

                document.getElementById('body').appendChild(table)
                table.appendChild(thead)
                table.appendChild(tbody)
                heading_1.innerHTML = "id";
                heading_2.innerHTML = "Name French";
                heading_3.innerHTML = "Name english";
                heading_4.innerHTML = "Name japan";
                heading_5.innerHTML = "Name chinese";
                heading_6.innerHTML = "type";
                row_1.appendChild(heading_1);
                row_1.appendChild(heading_2);
                row_1.appendChild(heading_3);
                row_1.appendChild(heading_4);
                row_1.appendChild(heading_5);
                row_1.appendChild(heading_6);
                thead.appendChild(row_1);




                for (let i = 0; i < 150; i++) {

//----------------------------recherche par id -------------------------------------------------
                    if (response[i + 1].id == idPoke.value) {
                   
                        row_2_data_1.innerHTML = response[i + 1].id;
                        row_2_data_2.innerHTML = response[i + 1].name.french
                        row_2_data_3.innerHTML = response[i + 1].name.english
                        row_2_data_4.innerHTML = response[i + 1].name.japanese
                        row_2_data_5.innerHTML = response[i + 1].name.chinese
                        row_2_data_6.innerHTML = response[i + 1].type;
                        row_2.appendChild(row_2_data_1);
                        row_2.appendChild(row_2_data_2);
                        row_2.appendChild(row_2_data_3);
                        row_2.appendChild(row_2_data_4);
                        row_2.appendChild(row_2_data_5);
                        row_2.appendChild(row_2_data_6);
                        tbody.appendChild(row_2);
                    }

//----------------------------recherche par nom-------------------------------------------------
                    if (response[i].name.french == namePoke.value || response[i].name.english == namePoke.value) {

                        row_2_data_1.innerHTML = response[i].id;
                        row_2_data_2.innerHTML = response[i].name.french
                        row_2_data_3.innerHTML = response[i].name.english
                        row_2_data_4.innerHTML = response[i].name.japanese
                        row_2_data_5.innerHTML = response[i].name.chinese
                        row_2_data_6.innerHTML = response[i].type;
                        row_2.appendChild(row_2_data_1);
                        row_2.appendChild(row_2_data_2);
                        row_2.appendChild(row_2_data_3);
                        row_2.appendChild(row_2_data_4);
                        row_2.appendChild(row_2_data_5);
                        row_2.appendChild(row_2_data_6);
                        tbody.appendChild(row_2);

                    }
//----------------------------recherche par type-------------------------------------------------
        //             if (response[i].type == type.value) {
                        
        //                 newArray2.push([response[i].id, response[i].name.french,response[i].name.english,response[i].name.japanese,response[i].name.chinese])
                        
        //             }

        //         }
                

        //         }
        //         newArray2.forEach(element=>document.write(
        //         "<table>"+"<tr>"+
        //         "<td>"+element[0]+"</td>"+
        //         "<td>"+element[1]+"</td>"+
        //         "<td>"+element[2]+"</td>"+
        //         "<td>"+element[3]+"</td>"+
        //         "<td>"+element[4]+"</td>"+
        //         "</tr>"+"</table>"))
        // )
}})})})
