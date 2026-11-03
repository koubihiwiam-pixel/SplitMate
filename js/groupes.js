let carteGroup = JSON.parse(localStorage.getItem('infoPartagee')) || [];

let groupConter = Date.now();
const nomGroupe = document.getElementById('nomGroupe');
const description = document.getElementById('description');
const devise = document.getElementById('devise');
const date = document.getElementById('date');

function creerGroup() {
    let objetGroup = {};
    if (nomGroupe.value && devise.value && date.value) {
        objetGroup.id = groupConter;
        objetGroup.nom = nomGroupe.value;
        objetGroup.description = description.value;
        objetGroup.devise = devise.value;
        objetGroup.date = date.value;
        objetGroup.cloture = false;

        carteGroup.push(objetGroup);
    } else {
        alert(`Veuillez remplir les champs`);
    }

    // console.log(carteGroup);

    localStorage.setItem('infoPartagee', JSON.stringify(carteGroup));
    window.location.href = 'groupe.html';
}


let groupes = document.getElementById('groupes');
let valeursRecue = localStorage.getItem('infoPartagee');
let tableInfo = JSON.parse(valeursRecue);

function afficherGroupe() {
    if (valeursRecue) {
        groupes.innerHTML = "";
        tableInfo.forEach(function (item) {
            groupes.innerHTML += `<div class="carte">
                    <div class="icones">
                        <i class="fa-solid fa-people-pulling"
                            style="background-color: #BBD1FB; padding: 10px; border-radius: 50%;color: blue;"></i>
                        <div>
                            <button data-id="${item.id}"class="modifier"><i class="fa-solid fa-pen"></i></button>
                            <button data-id="${item.id}" class="supprimer" ><i class="fa-sharp fa-solid fa-trash"></i></button>
                        </div>
                    </div>
                    <h2>${item.nom}</h2>
                    <h3>${item.description}</h3>
                    <h4 style="color: rgb(72, 70, 70);">540 € dépensés</h4>
                    <span id="cloture">ouvert</span>
                    <h6>Depuis le ${item.date}</h6>
                </div>`
            // console.log(item.id);
        });
    } else {
        groupes.textContent = "aucun groupe";
    }
    supprimerCarte();


}



function modifierGroup() {
    let updateCarte = groupes.querySelectorAll('.modifier');
    const dialog = document.querySelector('#modifierGroup');
    const modif = document.getElementById('modify');
    let newTable;
    updateCarte.forEach(function (btn) {
        btn.addEventListener('click', function () {

            let idCarte = this.dataset.id;
            console.log(idCarte);
            dialog.showModal();
            newTable = tableInfo.find(function (carte) {
                return carte.id == idCarte;
            });
            console.log(tableInfo.nom);
            modifyNomGroupe.value = newTable.nom;
            modifyDescription.value = newTable.description;
            modifyDevise.value = newTable.devise;
            dateModifie.value = newTable.date;



        })
    });


    modif.addEventListener("click", function (e) {
        e.preventDefault();


        newTable.nom = modifyNomGroupe.value;
        newTable.description = modifyDescription.value;
        newTable.devise = modifyDevise.value;
        newTable.date = dateModifie.value;


        console.log(tableInfo);
        localStorage.setItem('infoPartagee', JSON.stringify(tableInfo));
        afficherGroupe();
        window.location.href = 'groupe.html';
    })

}




function supprimerCarte() {
    let deleteCarte = groupes.querySelectorAll('.supprimer');
    deleteCarte.forEach(function (btn) {
        btn.addEventListener("click", function () {
            if (confirm("vous voulez vraiment supprimer ?")) {
                let idCarte = this.dataset.id;
                tableInfo = tableInfo.filter(function (carte) {
                    return carte.id != idCarte;
                });
                localStorage.setItem('infoPartagee', JSON.stringify(tableInfo));
                afficherGroupe();
            };
        });
    });
}



afficherGroupe();
modifierGroup()
