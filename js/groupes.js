let groupesLocal = JSON.parse(localStorage.getItem('infoPartagee')) || [];
let depenses = JSON.parse(localStorage.getItem('depense')) || [];

const nomGroupe = document.getElementById('nomGroupe');
const description = document.getElementById('description');
const devise = document.getElementById('devise');
const date = document.getElementById('date');


function creerGroup() {
    let objetGroup = {};
    if (nomGroupe.value && devise.value && date.value) {
        objetGroup.id = Date.now();
        objetGroup.nom = nomGroupe.value;
        objetGroup.description = description.value;
        objetGroup.devise = devise.value;
        objetGroup.date = date.value;
        objetGroup.cloture = false;

        groupesLocal.push(objetGroup);
    } else {
        alert(`Veuillez remplir les champs`);
        return;
    }


    localStorage.setItem('infoPartagee', JSON.stringify(groupesLocal));
    window.location.href = 'groupe.html';
}


let groupes = document.getElementById('groupes');
groupesLocal.forEach(function(item){
        let total =0;
        depenses.forEach(function(depense){
            if(depense.groupId == item.id){
                total += Number(depense.montant);

            }

        })

})


function totalDepense(){
    let totals =[];
    groupesLocal.forEach(function(item){
        let total =0;
        depenses.forEach(function(depense){
            if(depense.groupId == item.id){
                total += Number(depense.montant);

            }

        })
        // console.log(item.nom)
        // console.log(total);
        totals.push(total)
    });
return totals;
};
function afficherGroupe() {
    let total = totalDepense();
    console.log(total);
    if (groupesLocal) {
        groupes.innerHTML = "";
        
        groupesLocal.forEach(function (item , index) {
            
            groupes.innerHTML += `<div class="carte">
                    <div class="icones">
                        <i class="fa-solid fa-people-pulling"
                            style="background-color: #BBD1FB; padding: 10px; border-radius: 50%;color: blue;"></i>
                        <div>
                            <button data-id="${item.id}" class="modifier"><i class="fa-solid fa-pen"></i></button>
                            <button data-id="${item.id}" class="supprimer" ><i class="fa-sharp fa-solid fa-trash"></i></button>
                        </div>
                    </div>
                    <h2>${item.nom}</h2>
                    <h3>${item.description}</h3>
                    <h4 style="color: rgb(72, 70, 70);">${total[index]} dépensés</h4>
                    <span id="cloture" class="ouvert">ouvert</span>
                    <h6>Depuis le ${item.date}</h6>
                </div>`

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
    const cloture = document.getElementById('clotures');
    const cloturer = document.getElementById('cloture')
    let newTable;
    updateCarte.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            
            let idCarte = this.dataset.id;

            dialog.showModal();

            newTable = groupesLocal.find((carte) => carte.id == idCarte);


            console.log(groupesLocal.nom);
            modifyNomGroupe.value = newTable.nom;
            modifyDescription.value = newTable.description;
            modifyDevise.value = newTable.devise;
            dateModifie.value = newTable.date;
        })
    });
       cloture.addEventListener('click', function (e) {
    e.preventDefault();

    if (confirm("Voulez-vous clôturer ce groupe ?")) {
        newTable.cloture = true;

        localStorage.setItem('infoPartagee', JSON.stringify(groupesLocal));

        
        cloturer.classList.remove('ouvert');
        cloturer.classList.add('close');
        cloturer.textContent = "Clôturé";
        afficherGroupe();
        dialog.close();
        
    }
});


    modif.addEventListener("click", function (e) {
        e.preventDefault();


        newTable.nom = modifyNomGroupe.value;
        newTable.description = modifyDescription.value;
        newTable.devise = modifyDevise.value;
        newTable.date = dateModifie.value;


        console.log(groupesLocal);
        localStorage.setItem('infoPartagee', JSON.stringify(groupesLocal));
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
                groupesLocal = groupesLocal.filter(function (carte) {
                    return carte.id != idCarte;
                });
                localStorage.setItem('infoPartagee', JSON.stringify(groupesLocal));
                afficherGroupe();
            };
        });
    });
}




afficherGroupe();
modifierGroup()
