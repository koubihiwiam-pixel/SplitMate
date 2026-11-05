
let depenses = JSON.parse(localStorage.getItem('depense')) || [];
const ajouter = document.getElementById('ajouter');
const titre = document.getElementById('titre');
const montant = document.getElementById('montant');
const groupe = document.getElementById('Groupe');
const categorie = document.getElementById('categorie');
const date = document.getElementById('date2');
const payeur = document.getElementById('payeur');
const membresConcernes = document.getElementById("membres-concernes");

function addDepense() {

    selectPayeur();
    selectGroup();
    if (!ajouter) return;
    ajouter.addEventListener('click', function (e) {

        e.preventDefault();

        if (titre.value && montant.value && date.value) {

            let objetDepenses = {};

            objetDepenses.id = Date.now();
            objetDepenses.groupId = groupe.value;
            objetDepenses.titre = titre.value;
            objetDepenses.montant = montant.value;
            objetDepenses.categorie = categorie.value;
            objetDepenses.date = date.value;
            objetDepenses.payeurId = payeur.value;
            objetDepenses.parts = [];

            depenses.push(objetDepenses);

            localStorage.setItem('depense', JSON.stringify(depenses));
            window.location.href = 'depense.html'

            titre.value = "";
            montant.value = "";
            date.value = "";

            afficherDepense();

        } else {

            alert('Remplir les champs');

        }

    });

}



















function selectGroup() {

    const groupesLocal = JSON.parse(localStorage.getItem('infoPartagee')) || [];
    if (!groupe) return
    groupe.innerHTML = '';

    groupesLocal.forEach(function (element) {

        let option = document.createElement('option');

        option.innerHTML = element.nom;
        option.value = element.id;

        groupe.appendChild(option);

    });

}



let members = JSON.parse(localStorage.getItem("tableMomber"));
function selectPayeur() {

    //console.log(members);
    let newMombre;
    if (!groupe) return;
    groupe.addEventListener("change", function () {
        console.log(groupe.value);
        newMombre = members.filter(function (element) {
            return element.groupeId == groupe.value;
        });
        payeur.innerHTML = "";
        console.log(newMombre);
        newMombre.forEach(function (membre) {
            let option = document.createElement("option");

            option.innerHTML = membre.nom;
            option.value = membre.id;
            payeur.appendChild(option);
        });
        //console.log(payeur.textContent);


        membresConcernes.innerHTML = "";
        newMombre.forEach(function (membre) {
            let div = document.createElement("div");

            div.innerHTML += ` <input type="checkbox" id="member" value ="${membre.id}" checked />
                             <label for="membre">${membre.nom}</label>

                                    `
                    
            membresConcernes.appendChild(div);


        });

    });;
}

function afficherDepense() {
    const listeDepense = document.getElementById('listeDepense');
    if (listeDepense) {
        listeDepense.innerHTML = "";


        depenses.forEach(function (item) {



            const tr = document.createElement("tr");

            tr.innerHTML = `
            <td>${item.titre}</td>
            <td>${item.montant}</td>
            <td>${item.categorie}</td>
            <td>${item.payeurId}</td>
            <td>${item.date}</td>

            <td>
                <button data-id="${item.id}" class="toModify" type="button" style="background-color: transparent; border: 0; cursor: pointer;">
                    <i class="fa-solid fa-pen" style="color: blue; font-size: 16px;"></i>
                </button>

                <button data-id="${item.id}" class="delete" type="button" style="background-color: transparent; border: 0; cursor: pointer;">
                    <i class="fa-solid fa-trash" style="color: red;"></i>
                </button>
            </td>
        `;

            listeDepense.appendChild(tr);

        });
    }

    supprimerDepense();

}



function supprimerDepense() {
    const delet = document.querySelectorAll('.delete');
    delet.forEach(function (btn) {
        btn.addEventListener("click", function () {
            if(confirm("vous voulez vraiment supprimer ?")){
            let idDepense = this.dataset.id;
            depenses = depenses.filter((depense) => depense.id != idDepense);
            localStorage.setItem('depense', JSON.stringify(depenses));
            afficherDepense();
            }
        });
    })
}

function modifierDepense(){
    const modifier = document.querySelectorAll('.toModify');
    const dialog = document.getElementById('modifier-depense')
    console.log(modifier);
    let newdepense;
    modifier.forEach(function(btn){
        btn.addEventListener("click", function(){
            let idDepense = this.dataset.id;
            console.log(idDepense);
            
            newdepense = depenses.find((depense)=> depense.id == idDepense);
            console.log(newdepense)
            dialog.showModal();
            titreInputModify.value = newdepense.titre;
            montantInputModify.value = newdepense.montant;
            categorieModify.value = newdepense.categorie;
            dateModify.value = newdepense.date;
        });
    });
    const update = document.getElementById('idModifier');
    update.addEventListener("click" , function(){
        newdepense.titre = titreInputModify.value;
        newdepense.montant = montantInputModify.value;
        newdepense.categorie = categorieModify.value;
        newdepense.date = dateModify.value;

        localStorage.setItem('depense',JSON.stringify(depenses));
        afficherDepense();
    })




}

afficherDepense();
addDepense();
modifierDepense()




function  montantEnPartsEgales() {
   
}
   











































































